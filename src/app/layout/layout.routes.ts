import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
      },
    ],
  },
];
