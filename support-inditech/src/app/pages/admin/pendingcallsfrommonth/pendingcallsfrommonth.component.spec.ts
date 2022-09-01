import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingcallsfrommonthComponent } from './pendingcallsfrommonth.component';

describe('PendingcallsfrommonthComponent', () => {
  let component: PendingcallsfrommonthComponent;
  let fixture: ComponentFixture<PendingcallsfrommonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingcallsfrommonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingcallsfrommonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
