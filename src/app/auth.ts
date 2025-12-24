import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API_URL = 'https://angular-polly-app.onrender.com';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/api/auth/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/api/auth/login`, data);
  }

  changePassword(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post(`${this.API_URL}/api/auth/change-password`, data, { headers });
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
