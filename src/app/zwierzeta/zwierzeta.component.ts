import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-zwierzeta',
  templateUrl: './zwierzeta.component.html',
  styleUrls: ['./zwierzeta.component.scss']
})
export class ZwierzetaComponent implements OnInit {
  img1 = '/assets/images/gameAnimals/pies.png';
  img2 = '/assets/images/gameAnimals/sowa.png';
  img3 = '/assets/images/gameAnimals/kot.png';
  img4 = '/assets/images/gameAnimals/sarna.png';

  form: FormGroup;
  zwierze = '';
  sowa = '';
  kot = '';
  sarna = '';
  constructor() { }

  ngOnInit() {
  }
}

