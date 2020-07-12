import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwoceComponent } from './owoce.component';

describe('OwoceComponent', () => {
  let component: OwoceComponent;
  let fixture: ComponentFixture<OwoceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwoceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
