import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  private apiUrl = 'https://localhost:5001/api/feedback/'
  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  getFeedback(id: number): Observable<Feedback>{
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Feedback>(url);
  }

  addFeedback(feedback: Feedback): Observable<Feedback>{
    return this.http.post<Feedback>(this.apiUrl, feedback);
  }

  deleteFeedback(id: number): Observable<any>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Feedback>(url);
  }

  updateFeedback(id: number, feedback: Feedback): Observable<Feedback>{
    const url = `${this.apiUrl}${id}`;
    return this.http.put<Feedback>(url, feedback);
  }

}
