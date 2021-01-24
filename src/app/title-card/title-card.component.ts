import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss']
})
export class TitleCardComponent implements OnInit {

  obs$!: Observable<any>

  constructor(private cs: ContentfulService) { }

  ngOnInit(): void {
  }

  downloadResume() {
    this.obs$ = this.cs.getResume();
  }

}
