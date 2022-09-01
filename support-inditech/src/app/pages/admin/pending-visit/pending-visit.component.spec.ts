import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingVisitComponent } from './pending-visit.component';

describe('PendingVisitComponent', () => {
  let component: PendingVisitComponent;
  let fixture: ComponentFixture<PendingVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
