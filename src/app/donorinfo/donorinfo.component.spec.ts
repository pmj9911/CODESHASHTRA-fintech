import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorinfoComponent } from './donorinfo.component';

describe('DonorinfoComponent', () => {
  let component: DonorinfoComponent;
  let fixture: ComponentFixture<DonorinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
