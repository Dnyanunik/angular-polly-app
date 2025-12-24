import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Polly {

  private apiUrl = 'https://my-polly-app.onrender.com'; // backend server

  constructor(private http: HttpClient) {}

  // call Node.js backend /speak API
  synthesize(text: string, voice: string = 'Joanna'): Observable<Blob> {
    return this.http.post(`${this.apiUrl}/speak`, { text, voice }, {
      responseType: 'blob'
    });
  }
}
