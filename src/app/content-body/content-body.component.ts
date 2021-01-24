import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.scss']
})
export class ContentBodyComponent implements OnInit {

  obs$!: Observable<any>;
  show = false;

  constructor(private cs: ContentfulService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.obs$ = this.router.paramMap.pipe(
      switchMap((params: ParamMap) => this.cs.getContent(params.get('id'))
    ));

    setTimeout(() => {
      this.show = true;
    }, 150);
  }

}
