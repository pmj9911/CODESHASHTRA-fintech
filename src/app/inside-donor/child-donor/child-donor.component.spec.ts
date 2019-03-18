import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDonorComponent } from './child-donor.component';

describe('ChildDonorComponent', () => {
  let component: ChildDonorComponent;
  let fixture: ComponentFixture<ChildDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
