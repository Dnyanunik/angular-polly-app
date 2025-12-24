import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ThemeSwitcherComponent } from '../theme/theme-switcher/theme-switcher';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ThemeSwitcherComponent, RouterModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  // Inject PLATFORM_ID to handle SSR safety
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onLogin(form: NgForm) {
    if (form.invalid) return;

    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res: any) => {
          this.message = res.message || "Login successful!";
          this.speak(this.message);

          // Only access localStorage in the browser
          if (isPlatformBrowser(this.platformId)) {
            if (res.user) {
              // 1. Save Token
              if (res.token) {
                localStorage.setItem('token', res.token);
              } else if (res.user.token) {
                localStorage.setItem('token', res.user.token);
              }

              // 2. Save User Object (Important for AuthGuard and Greeting)
              localStorage.setItem('user', JSON.stringify(res.user));
            }

            // 3. Redirect to /tts (home)
            setTimeout(() => {
              this.router.navigate(['/tts']);
            }, 1500);
          }
        },
        error: (err) => {
          this.message = err.error?.error || err.error?.message || "Login failed. Please check your credentials.";
          this.speak(this.message);
          console.error("Login Error:", err);
        }
      });
  }

  speak(message: string) {
    // Only run TTS in the browser
    if (isPlatformBrowser(this.platformId)) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
      }
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
