import { Component, OnInit } from '@angular/core';
import { Priority } from '../../../models/priority.model';
import { PrioritiesService } from '../priorities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-priority-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './priority-edit.component.html',
  styleUrl: './priority-edit.component.css'
})
export class PriorityEditComponent implements OnInit {
  type: Priority = {
    id: 0,
    name: ''
  };
  id = 0;

  constructor(private route: ActivatedRoute, private typeService: PrioritiesService, private router: Router){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? + idParam : 0;   
  }

  editPriority(type: Priority){
    this.typeService.updatePriority(this.id, type)
      .subscribe(
        response => {
          this.router.navigate(['/priorities']);
        }
      );
  }
}
