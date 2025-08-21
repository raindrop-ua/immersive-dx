import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuizLogicService } from '@features/quiz/services/quiz-logic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [],
  templateUrl: './quiz-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizResultComponent {
  private router = inject(Router);
  private quiz = inject(QuizLogicService);
  public readonly result = this.quiz.getResult();

  retry() {
    this.quiz.reset();
    this.router.navigateByUrl('/quiz');
  }
}
