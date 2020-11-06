import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-zwierzeta',
  templateUrl: './zwierzeta.component.html',
  styleUrls: ['./zwierzeta.component.scss']
})
export class ZwierzetaComponent implements OnInit {

  @Input() list;

  form: FormGroup;
  post: any;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      kot: [null, Validators.compose([Validators.required, Validators.maxLength(3), Validators.pattern('kot')])],
      pies: [null, Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('pies')])],
      sarna: [null, Validators.compose([Validators.required, Validators.maxLength(5), Validators.pattern('sarna')])],
      kon: [null, Validators.compose([Validators.required, Validators.maxLength(3),  Validators.pattern('kon')])]
    })
  }

  ngOnInit() {
  }

  show(){
    alert('WSPANIALE CI POSZŁO!!!');
  }
}

