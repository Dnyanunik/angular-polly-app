import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: 'light' | 'dark' = 'light';
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('app-theme');
      if (savedTheme) {
        this.setTheme(savedTheme as 'light' | 'dark');
      }
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isBrowser) {
      document.documentElement.setAttribute('data-theme', this.currentTheme);
      localStorage.setItem('app-theme', this.currentTheme);
    }
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    this.applyTheme();
  }

  getTheme() {
    return this.currentTheme;
  }
}
