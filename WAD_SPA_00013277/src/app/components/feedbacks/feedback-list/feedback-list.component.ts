import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../../models/feedback.model';
import { FeedbacksService } from '../feedbacks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feedback-list.component.html',
  styleUrl: './feedback-list.component.css'
})
export class FeedbackListComponent implements OnInit {
  feedbacks!: Feedback[];

  constructor(private feedbackService: FeedbacksService){}

  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks(): void{
    this.feedbackService.getFeedbacks()
      .subscribe(feeedbacks => this.feedbacks = feeedbacks);
  }
}
