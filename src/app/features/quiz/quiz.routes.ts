import { Routes } from '@angular/router';
import { QuizLogicService } from '@features/quiz/services/quiz-logic.service';
import { QuizPageComponent } from '@features/quiz/components/quiz-page/quiz-page.component';
import { QuizResultComponent } from '@features/quiz/components/quiz-result/quiz-result.component';

export const QUIZ_ROUTES: Routes = [
  {
    path: '',
    providers: [QuizLogicService],
    children: [
      { path: '', component: QuizPageComponent },
      { path: 'result', component: QuizResultComponent },
    ],
  },
];
