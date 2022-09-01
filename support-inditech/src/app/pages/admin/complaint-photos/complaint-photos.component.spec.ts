import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintPhotosComponent } from './complaint-photos.component';

describe('ComplaintPhotosComponent', () => {
  let component: ComplaintPhotosComponent;
  let fixture: ComponentFixture<ComplaintPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
