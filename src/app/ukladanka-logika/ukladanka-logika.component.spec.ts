import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkladankaLogikaComponent } from './ukladanka-logika.component';

describe('UkladankaLogikaComponent', () => {
  let component: UkladankaLogikaComponent;
  let fixture: ComponentFixture<UkladankaLogikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkladankaLogikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkladankaLogikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
