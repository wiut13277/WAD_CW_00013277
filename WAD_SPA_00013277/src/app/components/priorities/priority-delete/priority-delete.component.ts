import { Component } from '@angular/core';
import { PrioritiesService } from '../priorities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Priority } from '../../../models/priority.model';

@Component({
  selector: 'app-priority-delete',
  standalone: true,
  imports: [],
  templateUrl: './priority-delete.component.html',
  styleUrl: './priority-delete.component.css'
})
export class PriorityDeleteComponent {
  priority: Priority = {
    id: 0,
    name: ''
  };

  id: number = 0;

  constructor(private route: ActivatedRoute,
    private priorityService : PrioritiesService, 
    private router : Router) {}

    ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('id');
      this.id = idParam ? +idParam : 0;    
      this.getPriority(this.id);
    }

    getPriority(id: number): void {
      this.priorityService.getPriority(id)
        .subscribe(priority => {
          this.priority = priority
        });
    }
  delete(): void{
    this.priorityService.deletePriority(this.id)
      .subscribe(
        response => {
            this.router.navigate(['/priorities']);
        },
        error =>  console.log(error)
      );
  }

  cancel(): void{
    this.router.navigate(['/priorities']);
  }
}
