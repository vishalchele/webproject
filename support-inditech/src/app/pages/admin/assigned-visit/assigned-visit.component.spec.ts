import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedVisitComponent } from './assigned-visit.component';

describe('AssignedVisitComponent', () => {
  let component: AssignedVisitComponent;
  let fixture: ComponentFixture<AssignedVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
