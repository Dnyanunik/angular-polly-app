import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private API_URL = 'https://my-polly-app.onrender.com/api/auth';
  constructor(private http: HttpClient) { }

register(data: any) {
  return this.http.post<{ message: string }>(
    `${this.API_URL}/register`,
    data
  );
}

login(data: any) {
  return this.http.post<{ message: string; user: any }>(
    `${this.API_URL}/login`,
    data
  );
}
// auth.service.ts
changePassword(data: any) {
  const token = localStorage.getItem('token');
  const headers = { 'Authorization': `Bearer ${token}` };

  return this.http.post(`${this.API_URL}/change-password`, data, { headers });
}
}
