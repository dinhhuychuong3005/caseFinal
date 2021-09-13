import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCCDVlistComponent } from './vip-ccdvlist.component';

describe('VipCCDVlistComponent', () => {
  let component: VipCCDVlistComponent;
  let fixture: ComponentFixture<VipCCDVlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipCCDVlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipCCDVlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
