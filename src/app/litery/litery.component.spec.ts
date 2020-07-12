import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteryComponent } from './litery.component';

describe('LiteryComponent', () => {
  let component: LiteryComponent;
  let fixture: ComponentFixture<LiteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
