import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {
  img1 = '/assets/images/gamePuzzle/1.jpg';
  img2 = '/assets/images/gamePuzzle/2.jpg';
  img3 = '/assets/images/gamePuzzle/3.jpg';
  img4 = '/assets/images/gamePuzzle/4.jpg';
  img5 = '/assets/images/gamePuzzle/5.png';
  img6 = '/assets/images/gamePuzzle/6.png';
  img7 = '/assets/images/gamePuzzle/7.jpg';
  img8 = '/assets/images/gamePuzzle/8.jpg';
  img9 = '/assets/images/gamePuzzle/9.jpg';
  img10 = '/assets/images/gamePuzzle/10.jpg';
  img11 = '/assets/images/gamePuzzle/11.png';
  img12 = '/assets/images/gamePuzzle/12.png';
  img13 = '/assets/images/gamePuzzle/13.png';
  img14 = '/assets/images/gamePuzzle/14.png';
  img15 = '/assets/images/gamePuzzle/15.png';
  img16 = '/assets/images/gamePuzzle/16.png';
  img17 = '/assets/images/gamePuzzle/17.png';
  img18 = '/assets/images/gamePuzzle/18.png';
  img19 = '/assets/images/gamePuzzle/19.png';
  img20 = '/assets/images/gamePuzzle/20.png';
  img21 = '/assets/images/gamePuzzle/21.png';
  img22 = '/assets/images/gamePuzzle/22.png';
  img23 = '/assets/images/gamePuzzle/23.png';
  img24 = '/assets/images/gamePuzzle/24.png';

  count = 0;
  isActive = false;
  isActive2 = false;
  isActive3 = false;
  isActive4 = false;
  isActive5 = false;
  isActive6 = false;
  isActive7 = false;
  isActive8 = false;
  isActive9 = false;
  isActive10 = false;
  isActive11 = false;
  isActive12 = false;

  title = '';
  constructor() { }

  ngOnInit() {
  }
  changGood() {
    this.img1 = '/assets/good.jpg';
  }
  changBad() {
    this.img2 = '/assets/bad.jpg';
  }
  changGood2() {
    this.img4 = '/assets/good.jpg';
  }
  changBad2() {
    this.img3 = '/assets/bad.jpg';

  }
  changGood3() {
    this.img6 = '/assets/good.jpg';
  }
  changBad3() {
    this.img5 = '/assets/bad.jpg';
  }
  changGood4() {
    this.img7 = '/assets/good.jpg';
  }
  changBad4() {
    this.img8 = '/assets/bad.jpg';

  }
  changGood5() {
    this.img9 = '/assets/good.jpg';
  }
  changBad5() {
    this.img10 = '/assets/bad.jpg';

  }
  changGood6() {
    this.img12 = '/assets/good.jpg';

  }
  changBad6() {
    this.img11 = '/assets/bad.jpg';

  }
  changGood7() {
    this.img14 = '/assets/good.jpg';
  }
  changBad7() {
    this.img13 = '/assets/bad.jpg';
  }
  changGood8() {
    this.img16 = '/assets/good.jpg';
  }
  changBad8() {
    this.img15 = '/assets/bad.jpg';
  }
  changGood9() {
    this.img17 = '/assets/good.jpg';
  }
  changBad9() {
    this.img18 = '/assets/bad.jpg';

  }
  changGood10() {
    this.img20 = '/assets/good.jpg';
  }
  changBad10() {
    this.img19 = '/assets/bad.jpg';

  }
  changGood11() {
    this.img22 = '/assets/good.jpg';
  }
  changBad11() {
    this.img21 = '/assets/bad.jpg';

  }
  changGood12() {
    this.img23 = '/assets/good.jpg';
  }
  changBad12() {
    this.img24 = '/assets/bad.jpg';

  }

  sum() {
    this.count += 1;
    this.isActive = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum2() {
    this.count += 1;
    this.isActive2 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum3() {
    this.count += 1;
    this.isActive3 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum4() {
    this.count += 1;
    this.isActive4 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum5() {
    this.count += 1;
    this.isActive5 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum6() {
    this.count += 1;
    this.isActive6 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum7() {
    this.count += 1;
    this.isActive7 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum8() {
    this.count += 1;
    this.isActive8 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum9() {
    this.count += 1;
    this.isActive9 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum10() {
    this.count += 1;
    this.isActive10 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum11() {
    this.count += 1;
    this.isActive11 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
  sum12() {
    this.count += 1;
    this.isActive12 = true;
    if (this.count === 1) {
      this.title = 'Słaby wynik';
    } else if (this.count <= 7) {
      this.title = 'Stać Cię na więcej';
    } else if (this.count <= 10) {
      this.title = 'Idzie Ci świetnie';
    } else if (this.count === 11) {
      this.title = 'Rewelacyjnie';
    } else if (this.count === 12) {
      this.title = 'Jesteś MISTRZEM!';
    } else {
      this.title = '';
    }
  }
}
