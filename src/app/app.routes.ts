import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { KantoComponent } from './kanto-component/kanto-component';
import { JohtoComponent } from './johto-component/johto-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
];
