import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  obs$!: Observable<any>;
  show: Boolean = false;
  
  constructor(private cs: ContentfulService, private router: Router) { }

  ngOnInit(): void {
    this.obs$ = this.cs.getBlogPosts();
    setTimeout(() => {
      this.show = true;
    }, 50);
  }

  onClick(id: String) {
    this.router.navigate(['/blog', id])
  }

}
