import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  friuts = '/assets/images/nav/friuts.png';
  liczby = '/assets/images/nav/liczby.jpg';
  literki = '/assets/images/nav/literki.png';
  zwierzeta = '/assets/images/nav/owce.jpg';
  constructor() { }
}
