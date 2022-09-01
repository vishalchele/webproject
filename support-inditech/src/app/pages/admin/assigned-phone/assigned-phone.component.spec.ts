import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedPhoneComponent } from './assigned-phone.component';

describe('AssignedPhoneComponent', () => {
  let component: AssignedPhoneComponent;
  let fixture: ComponentFixture<AssignedPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
