import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../../../models/issue.model';

@Component({
  selector: 'app-issue-delete',
  standalone: true,
  imports: [],
  templateUrl: './issue-delete.component.html',
  styleUrl: './issue-delete.component.css'
})
export class IssueDeleteComponent implements OnInit {
  issue: Issue = {
    id: 0,
    title: '',
    description: '',
    priority: { id: 0, name: '' },
    openedOn: new Date()
  }

  id = 0;

  constructor(private route: ActivatedRoute, private issuesService: IssuesService, private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0;    
    this.getIssue(this.id);
  }

  getIssue(id: number): void {
    this.issuesService.getIssue(id)
      .subscribe(issue => {
        this.issue = issue
      });
  }

  delete(): void{
    this.issuesService.deleteIssue(this.id).subscribe(
      response => {
        this.router.navigate(['/issues']);
      },
      error => console.log(error)
    );;;
  }
  
  cancel(): void {
    this.router.navigate(['/issues']);
  }
}
