import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizLogicService } from '@features/quiz/services/quiz-logic.service';
import { QuestionCardComponent } from '@features/quiz/components/question-card/question-card.component';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [QuestionCardComponent],
  templateUrl: './quiz-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPageComponent {
  protected quiz = inject(QuizLogicService);
  private router = inject(Router);

  select(qid: string, oid: string) {
    this.quiz.selectAnswer(qid, oid);
  }

  next() {
    const hasNext = this.quiz.next();
    if (!hasNext) {
      this.goResult();
    }
  }

  goResult() {
    this.router.navigateByUrl('/quiz/result');
  }
}
