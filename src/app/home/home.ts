import { Component } from '@angular/core';
import { Router ,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ThemeSwitcherComponent } from '../theme/theme-switcher/theme-switcher';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    ThemeSwitcherComponent,

    RouterLink
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  constructor(public router: Router) {}

  startService() {
    this.router.navigate(['/tts']);
  }
}
