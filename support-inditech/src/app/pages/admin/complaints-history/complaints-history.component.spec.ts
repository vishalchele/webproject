import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsHistoryComponent } from './complaints-history.component';

describe('ComplaintsHistoryComponent', () => {
  let component: ComplaintsHistoryComponent;
  let fixture: ComponentFixture<ComplaintsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
