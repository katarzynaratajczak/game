import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwierzetaLogikaComponent } from './zwierzeta-logika.component';

describe('ZwierzetaLogikaComponent', () => {
  let component: ZwierzetaLogikaComponent;
  let fixture: ComponentFixture<ZwierzetaLogikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwierzetaLogikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwierzetaLogikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
