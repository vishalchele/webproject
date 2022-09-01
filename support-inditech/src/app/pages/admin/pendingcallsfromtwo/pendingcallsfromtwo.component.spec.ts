import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingcallsfromtwoComponent } from './pendingcallsfromtwo.component';

describe('PendingcallsfromtwoComponent', () => {
  let component: PendingcallsfromtwoComponent;
  let fixture: ComponentFixture<PendingcallsfromtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingcallsfromtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingcallsfromtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
