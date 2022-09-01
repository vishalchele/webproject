import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTechnicionsComponent } from './manage-technicions.component';

describe('ManageTechnicionsComponent', () => {
  let component: ManageTechnicionsComponent;
  let fixture: ComponentFixture<ManageTechnicionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTechnicionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTechnicionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
