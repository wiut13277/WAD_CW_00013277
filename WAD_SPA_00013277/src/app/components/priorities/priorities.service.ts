import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Priority } from '../../models/priority.model';

@Injectable({
  providedIn: 'root'
})
export class PrioritiesService {
  private apiUrl = 'https://localhost:7061/api/priority/'
  constructor(private http: HttpClient) { }

  getPriorities(): Observable<Priority[]>{
    return this.http.get<Priority[]>(this.apiUrl);
  }

  getPriority(id: number): Observable<Priority>{
    return this.http.get<Priority>(`${this.apiUrl}${id}`);
  }

  addPriority(type: Priority): Observable<any>{
    return this.http.post<Priority>(this.apiUrl, type);
  }

  deletePriority(id: number): Observable<any>{
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Priority>(url);
  }

  updatePriority(id: number, type: Priority){
    return this.http.put<Priority>(`${this.apiUrl}${id}`, type);
  } 
}
