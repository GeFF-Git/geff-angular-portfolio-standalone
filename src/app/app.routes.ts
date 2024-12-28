import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    loadComponent: () => import("./layout/layout.component").then(c => c.LayoutComponent)
  }
];
