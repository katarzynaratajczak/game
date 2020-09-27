import { ImageForUkladanka } from './../models/imageForUkladanka';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ukladanka-logika',
  templateUrl: './ukladanka-logika.component.html',
  styleUrls: ['./ukladanka-logika.component.scss']
})
export class UkladankaLogikaComponent implements OnInit {

  imageList = new Array<ImageForUkladanka>();
  imageAnswear = new Array<ImageForUkladanka>();
  imageAnswearSecond = new Array<ImageForUkladanka>();

  constructor() { }

  ngOnInit() {
    this.fillImageList();
    this.fillImageAnswearFirst();
    this.fillImageAnswearSecond();
  }

  fillImageList() {
    for (let i = 0; i < 4; i++) {
      const image: ImageForUkladanka = new ImageForUkladanka();
      image.imagePath = '/assets/images/ukladanka/' + i + '.png';
      image.id = 'drag' + i;
      image.pool = 'div' + i;
      image.value = i;
      this.imageList.push(image);
    }
  }

  fillImageAnswearFirst() {
    for (let j = 0; j < 2; j++) {
      const image: ImageForUkladanka = new ImageForUkladanka();
      image.imagePath = '/assets/images/ukladanka/' + j + '.png';
      image.id = 'drag' + j;
      image.pool = 'dov' + j;
      image.value = j;
      this.imageAnswear.push(image);
    }
  }
  fillImageAnswearSecond(){
    for (let k = 2; k < 4; k++) {
      const image: ImageForUkladanka = new ImageForUkladanka();
      image.imagePath = '/assets/images/ukladanka/' + k + '.png';
      image.id = 'drag' + k;
      image.pool = 'dav' + k;
      image.value = k;
      this.imageAnswearSecond.push(image);
    }
  }

}
