import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CrudInterfaces } from './interfaces/crud.interfaces';

export class ProductService {
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  
  createCrud<T>(item: T): Observable<CrudInterfaces> {
    return this.http.post<CrudInterfaces>(this.apiUrl+'/crud', item).pipe(
      catchError(this.handleError) 
    );
  }

 
  updateShoesComponent(id: string, item: CrudInterfaces): Observable<CrudInterfaces> {
    return this.http.patch<CrudInterfaces>(`${this.apiUrl}/${id}`, item).pipe(
      catchError(this.handleError) 
    );
  }

 
  deleteShoesComponent(id: string): Observable<CrudInterfaces> {
    return this.http.delete<CrudInterfaces>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError) 
    );
  }

  
  getCrud(): Observable<CrudInterfaces[]> {
    return this.http.get<CrudInterfaces[]>(`${this.apiUrl}/crud`).pipe(
      catchError(this.handleError) 
    );
  }

  // Private function to handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);
    return throwError(error); // Propagate the error
  }
}
