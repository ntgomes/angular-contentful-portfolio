import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-featured-works',
  templateUrl: './featured-works.component.html',
  styleUrls: ['./featured-works.component.scss']
})
export class FeaturedWorksComponent implements OnInit {

  obs$!: Observable<any>;
  show: Boolean = false;

  constructor(private cs: ContentfulService, private router: Router) { }

  ngOnInit(): void {
    this.obs$ = this.cs.getFeaturedProjects();
    setTimeout(() => {
      this.show = true;
    }, 50);
  }

  onClick(id: String) {
    this.router.navigate(['/projects', id])
  }

}
