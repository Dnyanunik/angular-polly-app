import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { LoginComponent } from './login/login';
import { RegistrationComponent } from './registration/registration';
import { Tts } from './tts/tts';
import { Contact } from './contact/contact';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {path: 'contact', component: Contact },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'tts', component: Tts ,canActivate: [authGuard]},
  {path:'change-password', loadComponent: () => import('./change-password/change-password').then(m => m.ChangePassword)},
  // Redirect empty path to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Wildcard redirect to home
  { path: '**', redirectTo: 'home' }
];
