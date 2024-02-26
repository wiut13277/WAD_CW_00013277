import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from '../../models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  private apiUrl = 'https://localhost:7061/api/type/'
  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]>{
    return this.http.get<Type[]>(this.apiUrl);
  }

  getType(id: number): Observable<Type>{
    return this.http.get<Type>(`${this.apiUrl}${id}`);
  }

  addType(type: Type): Observable<any>{
    return this.http.post<Type>(this.apiUrl, type);
  }

  deleteType(id: number): Observable<any>{
    return this.http.delete<Type>(`${this.apiUrl}${id}`);
  }

  updateType(id: number, type: Type){
    return this.http.put<Type>(`${this.apiUrl}${id}`, type);
  } 
}