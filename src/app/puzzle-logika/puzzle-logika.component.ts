import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageForPuzzle } from '../models/imageForPuzzle';


@Component({
  selector: 'app-puzzle-logika',
  templateUrl: './puzzle-logika.component.html',
  styleUrls: ['./puzzle-logika.component.scss']
})
export class PuzzleLogikaComponent implements OnInit {
  isWin: boolean;
  isGameActive: boolean;

  @Input() image1;
  @Input() image2;
  // tslint:disable-next-line: no-output-native
  @Output() clickEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.isGameActive = true;
  }

  saveClick(clickedImage: number, secondImage: number) {
    this.isGameActive = false;
    if (clickedImage > secondImage) {
      this.isWin = true;
    } else {
      this.isWin = false;
    }
    this.clickEvent.emit(this.isWin);

  }
}
  //   fillList(imageNumber: number) {
  //     for (let i = imageNumber - 1; i >= 0; i--) {
  //       const imagesToList: ImageForPuzzle = new ImageForPuzzle();
  //       imagesToList.imagePath = '/assets/images/gamePuzzle/' + i + '.png';
  //       this.imageList.push(imagesToList);
  //     }
  //   }
  // setGame() {
  //   this.fillList(24);
  // }
