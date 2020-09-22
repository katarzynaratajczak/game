import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLogikaComponent } from './choose-logika.component';

describe('ChooseLogikaComponent', () => {
  let component: ChooseLogikaComponent;
  let fixture: ComponentFixture<ChooseLogikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLogikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLogikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
