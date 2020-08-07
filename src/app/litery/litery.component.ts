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
    this.data = ev.dataTransfer.getData(this.list.id);
    ev.target.appendChild(document.getElementById(this.data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData(this.list.id, ev.target.id);
    console.log('Udało Ci się');
  }



  // drop2(ev) {
  //   ev.preventDefault();
  //   this.data = ev.dataTransfer.getData('drag2');
  //   ev.target.appendChild(document.getElementById(this.data));
  // }

  // allowDrop2(ev) {
  //   ev.preventDefault();
  // }

  // drag2(ev) {
  //   ev.dataTransfer.setData('drag3', ev.target.id);
  // }

  // drop3(ev) {
  //   ev.preventDefault();
  //   this.data = ev.dataTransfer.getData('drag3');
  //   ev.target.appendChild(document.getElementById(this.data));
  // }

  // allowDrop3(ev) {
  //   ev.preventDefault();
  // }

  // drag3(ev) {
  //   ev.dataTransfer.setData('drag2', ev.target.id);
  // }

  // drop4(ev) {
  //   ev.preventDefault();
  //   this.data = ev.dataTransfer.getData('drag4');
  //   ev.target.appendChild(document.getElementById(this.data));
  // }

  // allowDrop4(ev) {
  //   ev.preventDefault();
  // }

  // drag4(ev) {
  //   ev.dataTransfer.setData('drag1', ev.target.id);
  // }
  constructor() { }

  ngOnInit() {
  }

}
