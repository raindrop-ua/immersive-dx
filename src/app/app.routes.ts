import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        data: {
          preload: true,
          seo: {},
        },
        loadComponent: () =>
          import('./pages/home/components/home/home-page.component').then(
            (m) => m.HomePageComponent,
          ),
      },
      {
        path: 'quiz',
        loadChildren: () =>
          import('./features/quiz/quiz.routes').then((m) => m.QUIZ_ROUTES),
      },
    ],
  },
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
];
