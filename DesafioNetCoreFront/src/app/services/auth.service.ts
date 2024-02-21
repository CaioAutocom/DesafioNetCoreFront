import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../interfaces/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string | null;
  private refreshToken!: string |  null;

  constructor(private http: HttpClient) { }

  login(login: Credentials): Observable<any> {
    const credentialsJSON = JSON.stringify(login);
    console.log(credentialsJSON); 
    return this.http.post<any>('http://localhost:5132/api/login', credentialsJSON, {
      headers: { 'Content-Type': 'application/json' } 
    });
  }
  setToken(token: string) {
    this.token = token;
    
  }

  getToken(): string | null {
    return this.token;
  }

  setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }
}
