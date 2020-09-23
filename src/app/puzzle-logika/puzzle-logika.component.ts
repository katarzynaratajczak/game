import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageForPuzzle } from '../models/imageForPuzzle';
import { SingleGame } from '../models/singleGame';


@Component({
  selector: 'app-puzzle-logika',
  templateUrl: './puzzle-logika.component.html',
  styleUrls: ['./puzzle-logika.component.scss']
})
export class PuzzleLogikaComponent implements OnInit {
  isWin: boolean;
  isGameActive: boolean;
  game: SingleGame;


  @Input() games;
  @Input() listLenght;
  // tslint:disable-next-line: no-output-native
  @Output() clickEvent = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
    this.startGame();
  }

  async saveClick(clickedImage: number, secondImage: number) {
    this.isGameActive = false;
    if (clickedImage > secondImage) {
      this.isWin = true;
    } else {
      this.isWin = false;
    }
    this.clickEvent.emit(this.isWin);
    await this.delay(3000);
    this.startGame();
  }

  startGame() {
    this.isGameActive = true;
    this.game = this.games.shift();
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

endGame(){

}

}
