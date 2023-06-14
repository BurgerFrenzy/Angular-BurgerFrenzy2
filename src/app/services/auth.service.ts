import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  token: string = "";

  login(e: string, p: string): boolean {
    const req = this.http.post<Token>('https://reqres.in/api/login', { email: e, password: p });
    req.subscribe(
      (res) => {
        this.token = res.token;
        this.cookie.set('token', this.token);
      }
    );

    if (this.token == "")
      return false;
    return true;
  }

  public logout(): void {
    this.token = "";
    this.cookie.set('token', "");
  }

  public isAuthenticated() {
    return (this.cookie.get('token') != "");
  }
}

interface Token {
  token: string;
}