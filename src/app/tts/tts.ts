import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';

/*** ANGULAR MATERIAL MODULES ***/
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';

import { Polly } from '../services/polly';

@Component({
  selector: 'app-tts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './tts.html',
  styleUrl: './tts.css',
})
export class Tts implements OnInit {
  // --- UI Variables ---
  userName: string = 'User';
  text: string = '';
  voice: string = 'Joanna';
  voices = ['Joanna', 'Matthew', 'Ivy', 'Kendra', 'Justin'];
  loading = false;
  audioUrl: string | null = null;

  // --- Session Variables ---
  private timeoutId: any;
  private readonly SESSION_TIME = 30 * 60 * 1000; // 30 Minutes

  constructor(
    private polly: Polly,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem('user');

      if (userData) {
        // User is logged in
        this.userName = JSON.parse(userData).name;
        this.startSessionTimer();
      } else {
        // User is NOT logged in: Block access
        alert('Please login first to access this page.');
        this.router.navigate(['/login']);
      }
    }
  }

  // --- Session Logic ---
  startSessionTimer() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.timeoutId) clearTimeout(this.timeoutId);

      this.timeoutId = setTimeout(() => {
        this.handleSessionExpiry();
      }, this.SESSION_TIME);
    }
  }

  handleSessionExpiry() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    alert('Session expired due to inactivity. Please login again.');
    this.router.navigate(['/login']);
  }

  // Resets the timer whenever the user moves the mouse or types
  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  refreshSession() {
    if (isPlatformBrowser(this.platformId)) {
      this.startSessionTimer();
    }
  }

  // --- Core Functionality ---
  convert() {
    if (!this.text.trim()) {
      alert('Please enter text first.');
      return;
    }

    this.loading = true;
    this.audioUrl = null;

    this.polly.synthesize(this.text, this.voice).subscribe({
      next: (blob: Blob) => {
        this.audioUrl = URL.createObjectURL(blob);
        this.loading = false;
      },
      error: () => {
        alert('Error generating speech.');
        this.loading = false;
      }
    });
  }

  // Inside tts.ts
logout() {
  if (isPlatformBrowser(this.platformId)) {
    // 1. Destroy the session
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // 2. Redirect
    this.router.navigate(['/login']);

    // Now, if the user clicks "Back", the AuthGuard will catch them
    // and say "Login first" because 'user' is gone.
  }
}

  // Clean up timer when component is destroyed to prevent memory leaks
  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
