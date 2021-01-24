import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  obs$!: Observable<any>;
  show: Boolean = false;
  
  constructor(private cs: ContentfulService, private router: Router) { }

  ngOnInit(): void {
    this.obs$ = this.cs.getPortfolioProjects();
    setTimeout(() => {
      this.show = true;
    }, 50);
  }

  onClick(id: String) {
    this.router.navigate(['/projects', id])
  }

}
