import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingcallsfromthreeComponent } from './pendingcallsfromthree.component';

describe('PendingcallsfromthreeComponent', () => {
  let component: PendingcallsfromthreeComponent;
  let fixture: ComponentFixture<PendingcallsfromthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingcallsfromthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingcallsfromthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
