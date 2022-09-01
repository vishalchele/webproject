import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingcallsfromoneComponent } from './pendingcallsfromone.component';

describe('PendingcallsfromoneComponent', () => {
  let component: PendingcallsfromoneComponent;
  let fixture: ComponentFixture<PendingcallsfromoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingcallsfromoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingcallsfromoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
