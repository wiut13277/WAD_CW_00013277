import { Component } from '@angular/core';
import { Priority } from '../../../models/priority.model';
import { PrioritiesService } from '../priorities.service';
import { Router, RouterLink } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-priority-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './priority-list.component.html',
  styleUrl: './priority-list.component.css'
})
export class PriorityListComponent {
  priorities!: Priority[];

  constructor(private priorityService: PrioritiesService,  private router: Router){}

  ngOnInit(): void{
    this.getPriorities();
  }

  getPriorities(): void{
    this.priorityService.getPriorities()
      .subscribe(priorities => this.priorities = priorities);
  }
}
