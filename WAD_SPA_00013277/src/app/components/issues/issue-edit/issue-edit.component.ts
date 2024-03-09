import { Component, OnInit } from '@angular/core';
import { Issue } from '../../../models/issue.model';
import { Priority } from '../../../models/priority.model';
import { IssuesService } from '../issues.service';
import { PrioritiesService } from '../../priorities/priorities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issue-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './issue-edit.component.html',
  styleUrl: './issue-edit.component.css'
})
export class IssueEditComponent implements OnInit{
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

  editIssue(issue: Issue){
    this.issuesService.updateIssue(this.id, this.issue).subscribe(
      response => {
        this.router.navigate(['/issues']);
      },
      error => console.log(error)
    );;;
  }
}
