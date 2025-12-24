import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth';

@Component({
  selector: 'app-change-password',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css',
})
export class ChangePassword {
oldPassword = '';
  newPassword = '';
  confirmPassword = '';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

 onChangePassword(form: NgForm) {
  this.authService.changePassword({
    oldPassword: this.oldPassword,
    newPassword: this.newPassword
  }).subscribe({
    next: (res: any) => {
      this.message = res.message; // "Password updated successfully!"
      this.speak(this.message);
      form.reset();
    },
   // change-password.component.ts
error: (err: any) => {
  console.log('Actual Error:', err); // Check if this is a ProgressEvent

  // If status is undefined or 0, it's usually a network/CORS/SSR issue
  if (!err.status || err.status === 0) {
    this.message = "Network error: Connection to server failed.";
  } else {
    this.message = err.error?.message || "Server error occurred.";
  }
  this.speak(this.message);
}
  });
}
  speak(msg: string) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(msg));
    }
  }

  goBack() {
    this.router.navigate(['/tts']);
  }
}
