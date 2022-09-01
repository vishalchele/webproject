import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCallsComponent } from './pending-calls.component';

describe('PendingCallsComponent', () => {
  let component: PendingCallsComponent;
  let fixture: ComponentFixture<PendingCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
