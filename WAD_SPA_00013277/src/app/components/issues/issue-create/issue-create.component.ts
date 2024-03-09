import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Issue } from '../../../models/issue.model';
import { PrioritiesService } from '../../priorities/priorities.service';
import { IssuesService } from '../issues.service';
import { Priority } from '../../../models/priority.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-issue-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './issue-create.component.html',
  styleUrl: './issue-create.component.css'
})
export class IssueCreateComponent implements OnInit{
  issue: Issue = {
    id: 0,
    title: '',
    description: '',
    priority: { id: 0, name: '' },
    openedOn: new Date()
  }

  priorities!: Priority[];

  id = 0;

  constructor(private route: ActivatedRoute, private issuesService: IssuesService, private prioritiesService: PrioritiesService, private router: Router) {}
  
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;    
    this.getIssue(this.id);

    this.prioritiesService.getPriorities().subscribe(priorities => {
      this.priorities = priorities;
      }
    );
  }

  getIssue(id: number): void {
    this.issuesService.getIssue(id)
      .subscribe(issue => {
        this.issue = issue;
      });
    
  }

  createIssue(issue: Issue){
    this.issuesService.addIssue(this.issue).subscribe(
      response => {
        this.router.navigate(['/issues']);
      },
      error => console.log(error)
    );;;
  }
}