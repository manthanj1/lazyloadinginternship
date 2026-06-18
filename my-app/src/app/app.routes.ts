// app.routes.ts
import { Routes } from '@angular/router';
import { BarDetailsComponent } from './bar-details/bar-details.component';

export const appRoutes: Routes = [
  {
    path: 'bar-details',
    component: BarDetailsComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
