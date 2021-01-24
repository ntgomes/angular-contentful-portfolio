/** From https://github.com/Everduin94/angular-headless-cms/blob/master/src/app/services/contentful.service.ts */
import { Injectable } from '@angular/core';

import { createClient } from 'contentful';
import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const CONFIG = environment.contentful_config;

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  /* Returns the contents of a Contentful's content object */
  getContent(id: string | null) {
    const promise = this.cdaClient.getEntry(id || '');
    return from(promise);
  }

  /* Returns the resume content type as an array */
  getResume() {
    const promise = this.cdaClient.getEntries({content_type: CONFIG.contentTypeIds.resume});
    return from(promise).pipe(map(entries => entries.items), tap(this.downloadItem));
  }

  /* Returns the array of blog posts, automatically sorted by last updated date */
  getBlogPosts() {
    const promise = this.cdaClient.getEntries({content_type: CONFIG.contentTypeIds.blogPost});
    return from(promise).pipe(map(entries => entries.items));
  }

  /* Returns the array of portfolio projects, automatically sorted by year */
  getPortfolioProjects() {
    const promise = this.cdaClient.getEntries({content_type: CONFIG.contentTypeIds.portfolioProject})
    return from(promise).pipe(map(entries => entries.items), tap(this.sortProjectsByYear))
  }

  /* Returns the array of portfolio projects, randomized */
  getFeaturedProjects() {
    const promise = this.cdaClient.getEntries({content_type: CONFIG.contentTypeIds.portfolioProject})
    return from(promise).pipe(map(entries => entries.items), tap(this.shuffleArray))
  }

  /* Sorts the portfolio projects from their year field */
  sortProjectsByYear(works: any[]): any[] {
    const sortedWorks = works.sort((w1, w2) => { return w2.fields.year - w1.fields.year; });
    return sortedWorks;
  }

  /* Shuffles the given array and returns it. Based on https://stackoverflow.com/a/12646864 */
  shuffleArray(works: Object[]): Object[] {
    for (let i = works.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [works[i], works[j]] = [works[j], works[i]];
    }
    return works;
  }

  /* Creates an anchor that points to the resume content's resumePDF field and downloads it */
  downloadItem(item: any[]) {
    const downloadLink = document.createElement('a');
    downloadLink.href = item[0].fields.resumePDF.fields.file.url;
    downloadLink.target = '_blank';
    downloadLink.download = 'My_Resume.pdf';
    downloadLink.click();
  }

}
