import { Component, OnInit, Input } from '@angular/core';
import { ImageForPuzzle } from '../models/imageForPuzzle';
import { SingleGame } from '../models/singleGame';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {

  imageValue1 = new ImageForPuzzle();
  imageValue2 = new ImageForPuzzle();
  count = 0;
  clickClic = 3;
  title = '';

  listGame = new Array<SingleGame>();
  imageList = new Array<ImageForPuzzle>();
  listLength: number;

  constructor() { }

  ngOnInit() {
    this.fillImageList();
    this.fillGameList();
    this.listLength = this.listGame.length;
  }

  click(click: boolean) {
    if (click === true) {
      this.count += 1;
      this.clickClic -= 1;
    } else {
      this.clickClic -= 1;
    }
  }

  fillImageList() {
    for (let i = 0; i < 6; i++) {
      const image: ImageForPuzzle = new ImageForPuzzle();
      image.imagePath = '/assets/images/gamePuzzle/' + i + '.png';
      image.value = i;
      this.imageList.push(image);
    }
  }

  fillGameList() {
    for (let i = 0; i < 3; i++) {
      const singleGame = new SingleGame();
      singleGame.image1 = this.imageList.shift();
      singleGame.image2 = this.imageList.shift();

      this.listGame.push(singleGame);
    }
  }
}

