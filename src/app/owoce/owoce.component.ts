import { Component, OnInit } from '@angular/core';
import { ImageForGame } from '../models/imageForGame';

@Component({
  selector: 'app-owoce',
  templateUrl: './owoce.component.html',
  styleUrls: ['./owoce.component.scss']
})
export class OwoceComponent implements OnInit {
  count: number;
  sum: number;
  imageList: ImageForGame[] = [];

  constructor() {
  }

  ngOnInit() {
    this.setGame();
  }

  fillImageList(godImageNumber: number, badImageNumber: number) {
    let zagadka = 0;
    for (let i = godImageNumber - 1; i >= 0; i--) {
      const imageToList: ImageForGame = new ImageForGame();
      imageToList.imagePath = '/assets/images/gameFruits/goodAnswer/' + i + '.png';
      imageToList.classForStyle = 'zagadka' + zagadka;
      imageToList.isGood = true;
      zagadka++;
      this.imageList.push(imageToList);
    }
    for (let j = badImageNumber - 1; j >= 0; j--) {
      const imageToList: ImageForGame = new ImageForGame();
      imageToList.imagePath = '/assets/images/gameFruits/badAnswer/' + j + '.png';
      imageToList.classForStyle = 'zagadka' + zagadka;
      imageToList.isGood = false;
      zagadka++;
      this.imageList.push(imageToList);
    }
  }

  clickOnImage(image: ImageForGame) {
    this.count -= 1;
    image.isActive = true;
    if (image.isGood) {
      this.sum += 1;
    }
    if (this.count === 0) {
      setTimeout(() => {
        this.showResult();
        this.setGame();
      }, 1);
    }
  }

  showResult() {
    alert('Koniec gry! Zdobyłes ' + this.sum + ' punktów');
  }

  setGame() {
    this.sum = 0;
    this.count = 9;
    this.imageList = [];
    this.fillImageList(9, 6);
  }
}
