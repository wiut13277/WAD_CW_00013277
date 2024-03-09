import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from '../../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private apiUrl = 'https://localhost:7061/api/issue/'
  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]>{
    return this.http.get<Issue[]>(this.apiUrl);
  }

  getIssue(id: number): Observable<Issue>{
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Issue>(url);
  }

  addIssue(issue: Issue): Observable<Issue>{
    return this.http.post<Issue>(this.apiUrl, issue);
  }

  deleteIssue(id: number): Observable<any>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Issue>(url);
  }

  updateIssue(id: number, issue: Issue): Observable<Issue>{
    const url = `${this.apiUrl}${id}`;
    return this.http.put<Issue>(url, issue);
  }

}
