import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleLogikaComponent } from './puzzle-logika.component';

describe('PuzzleLogikaComponent', () => {
  let component: PuzzleLogikaComponent;
  let fixture: ComponentFixture<PuzzleLogikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleLogikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleLogikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
