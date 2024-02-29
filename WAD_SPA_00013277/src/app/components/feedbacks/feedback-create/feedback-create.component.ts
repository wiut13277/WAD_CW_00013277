import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Feedback } from '../../../models/feedback.model';
import { TypesService } from '../../types/types.service';
import { FeedbacksService } from '../feedbacks.service';
import { Type } from '../../../models/type.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback-create.component.html',
  styleUrl: './feedback-create.component.css'
})
export class FeedbackCreateComponent implements OnInit{
  feedback: Feedback = {
    id: 0,
    title: '',
    description: '',
    type: { id: 0, name: '' }
  }

  types!: Type[];

  id = 0;

  constructor(private route: ActivatedRoute, private feedbacksService: FeedbacksService, private typesService: TypesService, private router: Router) {}
  
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;    
    this.getFeedback(this.id);

    this.typesService.getTypes().subscribe(types => {
      this.types = types;
      }
    );
  }

  getFeedback(id: number): void {
    this.feedbacksService.getFeedback(id)
      .subscribe(feedback => {
        this.feedback = feedback;
      });
    
  }

  createFeedback(feedback: Feedback){
    this.feedbacksService.addFeedback(this.feedback).subscribe(
      response => {
        this.router.navigate(['/feedbacks']);
      },
      error => console.log(error)
    );;;
  }
}