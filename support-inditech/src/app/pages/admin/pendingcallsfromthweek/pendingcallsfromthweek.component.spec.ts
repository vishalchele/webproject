import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingcallsfromthweekComponent } from './pendingcallsfromthweek.component';

describe('PendingcallsfromthweekComponent', () => {
  let component: PendingcallsfromthweekComponent;
  let fixture: ComponentFixture<PendingcallsfromthweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingcallsfromthweekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingcallsfromthweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
