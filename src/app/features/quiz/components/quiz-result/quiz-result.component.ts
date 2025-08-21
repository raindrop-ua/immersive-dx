import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizLogicService } from '@features/quiz/services/quiz-logic.service';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizResultComponent {
  private quiz = inject(QuizLogicService);
  public readonly result = this.quiz.getResult();

  retry() {
    this.quiz.reset();
  }
}
