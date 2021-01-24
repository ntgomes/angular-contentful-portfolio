import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recent-blog',
  templateUrl: './recent-blog.component.html',
  styleUrls: ['./recent-blog.component.scss']
})
export class RecentBlogComponent implements OnInit {

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
