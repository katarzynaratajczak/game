import { ImageForLitery } from './../models/imageForLitery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litery-logika',
  templateUrl: './litery-logika.component.html',
  styleUrls: ['./litery-logika.component.scss']
})
export class LiteryLogikaComponent implements OnInit {

  imageList = new Array<ImageForLitery>();
  answearList = new Array<ImageForLitery>();


  constructor() { }

  ngOnInit() {
    this.fillImageList();
    this.fillAnswearList();
  }

  fillImageList() {
    for (let i = 0; i < 21; i++) {
      const image: ImageForLitery = new ImageForLitery();
      image.imagePath = '/assets/images/gameDrop/' + i + '.png';
      image.value = i;
      image.pool = 'div' + i;
      image.id = 'drag' + i;
      this.imageList.push(image);
    }
  }
  fillAnswearList() {
    for (let j = 0; j < 21; j++) {
      const image: ImageForLitery = new ImageForLitery();
      image.imagePath = '/assets/images/gameDrop/' + j + '.png';
      image.value = j;
      image.pool = 'div' + j;
      image.id = 'drag' + j;
      this.imageList.push(image);
    }
  }
}
