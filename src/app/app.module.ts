import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwNavbarComponent } from './pw-navbar/pw-navbar.component';
import { PwContentComponent } from './pw-content/pw-content.component';
import { TitleCardComponent } from './title-card/title-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecentBlogComponent } from './recent-blog/recent-blog.component';
import { StoreModule } from '@ngrx/store';
import { FeaturedWorksComponent } from './featured-works/featured-works.component';
import { MarkdownModule } from 'ngx-markdown';
import { FooterComponent } from './footer/footer.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContentBodyComponent } from './content-body/content-body.component';

@NgModule({
  declarations: [
    AppComponent,
    PwNavbarComponent,
    PwContentComponent,
    TitleCardComponent,
    RecentBlogComponent,
    FeaturedWorksComponent,
    FooterComponent,
    BlogListComponent,
    ProjectListComponent,
    ContentBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot({}, {}),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
