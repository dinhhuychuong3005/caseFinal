import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentdetailComponent } from './rentdetail.component';

describe('RentdetailComponent', () => {
  let component: RentdetailComponent;
  let fixture: ComponentFixture<RentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
