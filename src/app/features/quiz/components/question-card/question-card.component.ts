import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  OnChanges,
} from '@angular/core';
import { Question } from '@shared/models/question.model';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [],
  templateUrl: './question-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent implements OnChanges {
  question = input.required<Question>();
  selectAnswer = output<string>();

  ngOnChanges() {
    console.log('question changed', this.question());
  }
}
