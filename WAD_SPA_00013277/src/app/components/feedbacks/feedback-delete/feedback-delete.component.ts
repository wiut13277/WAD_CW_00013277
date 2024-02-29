import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from '../feedbacks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../../../models/feedback.model';

@Component({
  selector: 'app-feedback-delete',
  standalone: true,
  imports: [],
  templateUrl: './feedback-delete.component.html',
  styleUrl: './feedback-delete.component.css'
})
export class FeedbackDeleteComponent implements OnInit {
  feedback: Feedback = {
    id: 0,
    title: '',
    description: '',
    type: { id: 0, name: '' }
  }

  id = 0;

  constructor(private route: ActivatedRoute, private feedbacksService: FeedbacksService, private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;    
    this.getFeedback(this.id);
  }

  getFeedback(id: number): void {
    this.feedbacksService.getFeedback(id)
      .subscribe(feedback => {
        this.feedback = feedback
      });
  }

  delete(): void{
    this.feedbacksService.deleteFeedback(this.id).subscribe(
      response => {
        this.router.navigate(['/feedbacks']);
      },
      error => console.log(error)
    );;;
  }
  
  cancel(): void {
    this.router.navigate(['/feedbacks']);
  }
}
