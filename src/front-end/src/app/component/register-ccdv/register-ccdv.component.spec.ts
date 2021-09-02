import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCCDVComponent } from './register-ccdv.component';

describe('RegisterCCDVComponent', () => {
  let component: RegisterCCDVComponent;
  let fixture: ComponentFixture<RegisterCCDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCCDVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCCDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
