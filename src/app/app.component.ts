import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  friuts = '/assets/images/nav/0.png';
  liczby = '/assets/images/nav/1.png';
  literki = '/assets/images/nav/2.png';
  zwierzeta = '/assets/images/nav/3.png';
  constructor() { }
}
