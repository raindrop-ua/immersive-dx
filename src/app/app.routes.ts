import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'quiz',
    loadChildren: () =>
      import('./features/quiz/quiz.routes').then((m) => m.QUIZ_ROUTES),
  },
];
