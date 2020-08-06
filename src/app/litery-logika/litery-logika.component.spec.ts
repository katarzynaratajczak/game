import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteryLogikaComponent } from './litery-logika.component';

describe('LiteryLogikaComponent', () => {
  let component: LiteryLogikaComponent;
  let fixture: ComponentFixture<LiteryLogikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteryLogikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteryLogikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
