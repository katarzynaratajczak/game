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


  @Input() games: SingleGame[];
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
    await this.delay(2000);

    if (this.games.length > 0) {
      this.startGame();
    } else {
      this.showResult();
    }
  }

  startGame() {
    this.isGameActive = true;
    this.game = this.games.shift();
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  showResult() {
    alert('Koniec gry!');
  }
}


