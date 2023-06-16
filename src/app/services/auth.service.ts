import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users/addUser'; // URL de tu backend

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    return this.http.post<any>(`${this.apiUrl}/addUser`, user)
      .pipe(
        catchError(error => {
          // Maneja el error aquí si es necesario
          return throwError(error);
        })
      );
  }
}

