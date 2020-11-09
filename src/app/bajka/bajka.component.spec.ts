import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajkaComponent } from './bajka.component';

describe('BajkaComponent', () => {
  let component: BajkaComponent;
  let fixture: ComponentFixture<BajkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
