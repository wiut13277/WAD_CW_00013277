import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../../models/feedback.model';
import { Type } from '../../../models/type.model';
import { FeedbacksService } from '../feedbacks.service';
import { TypesService } from '../../types/types.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback-edit.component.html',
  styleUrl: './feedback-edit.component.css'
})
export class FeedbackEditComponent implements OnInit{
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

  editFeedback(feedback: Feedback){
    this.feedbacksService.updateFeedback(this.id, this.feedback).subscribe(
      response => {
        this.router.navigate(['/feedbacks']);
      },
      error => console.log(error)
    );;;
  }
}
