import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackEditComponent } from './feedback-edit.component';

describe('FeedbackEditComponent', () => {
  let component: FeedbackEditComponent;
  let fixture: ComponentFixture<FeedbackEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
