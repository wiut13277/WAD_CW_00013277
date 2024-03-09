import { Component } from '@angular/core';
import { Priority } from '../../../models/priority.model';
import { PrioritiesService } from '../priorities.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-priority-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './priority-create.component.html',
  styleUrl: './priority-create.component.css'
})
export class PriorityCreateComponent {
  priority: Priority = {
    id: 0,
    name: ''
  };
  constructor(private priorityService: PrioritiesService, private router: Router){}

  createPriority(priority: Priority){
    this.priorityService.addPriority(priority)
      .subscribe(
        response => {
          this.router.navigate(['/priorities']);
        }
      );
  }
}
