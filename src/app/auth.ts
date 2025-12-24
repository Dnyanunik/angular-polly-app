import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use the base URL only. We will append the specific paths in the methods.
  private API_URL = 'https://angular-polly-app.onrender.com';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    // Match the backend route: /api/auth/register
    return this.http.post(`${this.API_URL}/api/auth/register`, data);
  }

  login(data: any): Observable<any> {
    // Match the backend route: /api/auth/login
    return this.http.post(`${this.API_URL}/api/auth/login`, data);
  }

  changePassword(data: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Ensure headers are sent correctly
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Match the backend route: /api/auth/change-password
    return this.http.post(`${this.API_URL}/api/auth/change-password`, data, { headers });
  }

  // Bonus: Helper for the Polly Speak route
  speak(text: string, voice: string = 'Joanna'): Observable<Blob> {
    return this.http.post(`${this.API_URL}/speak`, { text, voice }, { responseType: 'blob' });
  }
}
