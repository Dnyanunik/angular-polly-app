import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from '../theme/theme-switcher/theme-switcher';
import { RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.html',
  styleUrls: ['./registration.css'],

  // ⭐ IMPORTANT → Import Material modules here
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ThemeSwitcherComponent,
    RouterLink
  ]
})
export class RegistrationComponent {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';

  constructor(private authService: AuthService,private router: Router) {}

  // registration.component.ts

// registration.component.ts

// registration.component.ts

// registration.component.ts

onRegister(form: NgForm) {
  if (form.invalid || this.password !== this.confirmPassword) {
    const msg = 'Please fix the errors in the form.';
    this.message = msg;
    this.speak(msg); // Speak the validation error
    return;
  }

  this.authService.register({
    name: this.name,
    email: this.email,
    password: this.password
  }).subscribe({
    next: (res: any) => {
      const successMsg = 'Registration successful! Click OK to go to the login page.';
      this.message = "Registration successful!";
      
      // 1. Speak the message first
      this.speak(successMsg);

      // 2. Show the browser alert (this pauses execution)
      alert(successMsg);

      // 3. Navigate after user clicks "OK"
      this.router.navigate(['/login']);
    },
    error: (err: any) => {
      const errorText = err.error?.message || err.statusText || 'Registration failed';
      this.message = errorText;
      
      // Speak the error
      this.speak(errorText);
      alert('Error: ' + errorText);
    }
  });
}

// Corrected Speech Synthesis Method
speak(message: string) {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech so it doesn't overlap
    window.speechSynthesis.cancel(); 

    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }
}
// Inside RegistrationComponent class
goToHome() {
  this.router.navigate(['/home']);
}
}
