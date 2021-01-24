import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw-navbar',
  templateUrl: './pw-navbar.component.html',
  styleUrls: ['./pw-navbar.component.scss']
})
export class PwNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenuControl(): void {
    var x = document.getElementById('pwMobileLinks');
    if (x && x.style.display === 'block') {
      x.style.display = 'none';
    } else if (x) {
      x.style.display = 'block';
    }
  }

}
