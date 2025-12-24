import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  template: `
    <button class="theme-btn" [class.dark]="isDark" (click)="toggleTheme()">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  `,
  styles: [`
    .theme-btn {
      padding: 10px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      font-size: 20px;
      background: #fff;
      color: #000;
      transition: 0.3s;
    }

    .theme-btn.dark {
      background: #000;
      color: #fff;
    }
  `]
})
export class ThemeSwitcherComponent {

  isDark = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      this.document.body.classList.add('dark-theme');
    } else {
      this.document.body.classList.remove('dark-theme');
    }
  }

}
