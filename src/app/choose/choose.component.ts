import { ImageForChosse } from './../models/imageForChoose';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {


  kitchenList = new Array<ImageForChosse>();
  bathroomList = new Array<ImageForChosse>();
  badList = new Array<ImageForChosse>();

  constructor() { }

  ngOnInit() {
    this.fillKitchenList();
    this.fillBathroomList();
    this.fillBadList();
  }

  fillKitchenList() {
    for (let i = 0; i < 5; i++) {
      const imageToList: ImageForChosse = new ImageForChosse();
      imageToList.imagePath = '/assets/images/gameChoose/kitchen/' + i + '.png';
      this.kitchenList.push(imageToList);
    }
  }

  fillBadList() {
    for (let i = 0; i < 5; i++) {
      const imageToList: ImageForChosse = new ImageForChosse();
      imageToList.imagePath = '/assets/images/gameChoose/bad/' + i + '.png';
      this.badList.push(imageToList);
    }
  }

  fillBathroomList() {
    for (let i = 0; i < 5; i++) {
      const imageToList: ImageForChosse = new ImageForChosse();
      imageToList.imagePath = '/assets/images/gameChoose/bathroom/' + i + '.png';
      this.kitchenList.push(imageToList);
    }
  }
}
