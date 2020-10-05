import { ImageForLitery } from './../models/imageForLitery';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-litery',
  templateUrl: './litery.component.html',
  styleUrls: ['./litery.component.scss']
})
export class LiteryComponent implements OnInit {

  @Input() list;
  @Input() answearList;

  data: any;

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    if (data === ev.target.id) {
      ev.target.appendChild(document.getElementById(data));
      const zmiana = document.getElementById(ev.target.id);
      zmiana.style.filter = 'opacity(100%)';
    } else {
      alert('Zły ruch. Dopasuj literę jeszcze raz');
    }

  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
  }

  constructor() { }

  ngOnInit() {
  }

}
