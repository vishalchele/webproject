import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgessComponent } from './in-progess.component';

describe('InProgessComponent', () => {
  let component: InProgessComponent;
  let fixture: ComponentFixture<InProgessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProgessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
