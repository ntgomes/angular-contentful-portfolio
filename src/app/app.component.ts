import { Component } from '@angular/core';
/* If you are using Contentful CMS, then you need the below imports, as explained
in https://stackoverflow.com/a/65574972 */
import "core-js/stable";
import "regenerator-runtime/runtime";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Portfolio Website';
}
