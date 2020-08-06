import { ImageForLitery } from './../models/imageForLitery';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

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
      this.imageList.push(image);
    }
  }
  fillAnswearList() {
    for (let j = 0; j < 21; j--) {
      const image: ImageForLitery = new ImageForLitery();
      image.imagePath = '/assets/images/gameDrop/' + j + '.png';
      image.value = j;
      this.imageList.push(image);
    }
  }
}
