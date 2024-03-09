import { Component, OnInit } from '@angular/core';
import { Issue } from '../../../models/issue.model';
import { IssuesService } from '../issues.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  issues!: Issue[];

  constructor(private issueService: IssuesService){}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void{
    this.issueService.getIssues()
      .subscribe(feeedbacks => this.issues = feeedbacks);
  }
}
