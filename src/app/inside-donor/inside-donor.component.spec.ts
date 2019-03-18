import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideDonorComponent } from './inside-donor.component';

describe('InsideDonorComponent', () => {
  let component: InsideDonorComponent;
  let fixture: ComponentFixture<InsideDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
