import { ImageForAnimals } from './../models/imageForAnimals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zwierzeta-logika',
  templateUrl: './zwierzeta-logika.component.html',
  styleUrls: ['./zwierzeta-logika.component.scss']
})
export class ZwierzetaLogikaComponent implements OnInit {

  imageList: ImageForAnimals[] = [];

  constructor() { }

  ngOnInit() {
    console.log('zwierze logika');
    this.fillImageList();
  }

  fillImageList() {
    for (let i = 0; i < 4; i++) {
      const image: ImageForAnimals = new ImageForAnimals();
      image.imagePath = '/assets/images/gameAnimals/' + i + '.png';
      this.imageList.push(image);
      console.log(image);
    }
  }

}
