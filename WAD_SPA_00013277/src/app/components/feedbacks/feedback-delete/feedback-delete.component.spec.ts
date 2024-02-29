import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDeleteComponent } from './feedback-delete.component';

describe('FeedbackDeleteComponent', () => {
  let component: FeedbackDeleteComponent;
  let fixture: ComponentFixture<FeedbackDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
