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
  clickClic = 12;
  title = '';

  listGame = new Array<SingleGame>();

  constructor() { }

  ngOnInit() {
    this.imageValue1.imagePath = '/assets/images/gamePuzzle/2/0.png';
    this.imageValue1.value = 2;
    this.imageValue2.imagePath = '/assets/images/gamePuzzle/1/0.png';
    this.imageValue2.value = 1;
  }

  click(click: boolean) {
    if (click === true) {
      this.count += 1;
      this.clickClic -= 1;
    } else {
      this.clickClic -= 1;
    }
  }

  createGame() {
  }
}

