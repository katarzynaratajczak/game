import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkladankaComponent } from './ukladanka.component';

describe('UkladankaComponent', () => {
  let component: UkladankaComponent;
  let fixture: ComponentFixture<UkladankaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkladankaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkladankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
