import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ukladanka',
  templateUrl: './ukladanka.component.html',
  styleUrls: ['./ukladanka.component.scss']
})
export class UkladankaComponent implements OnInit {

  @Input() imageList;
  @Input() answearList;
  @Input() answearListSecond;

  constructor() { }

  ngOnInit() {
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    if (data === ev.target.id) {
      ev.target.appendChild(document.getElementById(data));
      const zmiana = document.getElementById(ev.target.id);
      zmiana.style.filter = 'opacity(100%)';
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
  }
}
