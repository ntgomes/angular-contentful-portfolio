import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { PwContentComponent } from './pw-content/pw-content.component';

const routes: Routes = [{
  path: 'blog/:id', component: ContentBodyComponent
},{
  path: 'projects/:id', component: ContentBodyComponent
},{
  path: 'blog', component: BlogListComponent
},{
  path: 'projects', component: ProjectListComponent
},{
  path: '', component: PwContentComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
