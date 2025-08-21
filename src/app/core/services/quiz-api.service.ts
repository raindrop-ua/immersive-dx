import { Injectable } from '@angular/core';
import { delay, of, Observable } from 'rxjs';
import { Question } from '@shared/models/question.model';

@Injectable({ providedIn: 'root' })
export class QuizApiService {
  getQuestions(): Observable<Question[]> {
    const mock: Question[] = [
      {
        id: '1',
        text: 'What is ChangeDetectionStrategy.OnPush?',
        correctOptionId: 'b',
        options: [
          { id: 'a', text: 'Disables change detection' },
          { id: 'b', text: 'Checks only on input/observable/signal changes' },
          { id: 'c', text: 'Always triggers zone.js globally' },
        ],
      },
      {
        id: '2',
        text: 'What is a standalone component in Angular?',
        correctOptionId: 'a',
        options: [
          {
            id: 'a',
            text: 'Component that declares its own imports/providers without NgModule',
          },
          { id: 'b', text: 'Component that cannot be lazy-loaded' },
          { id: 'c', text: 'Special component for SSR only' },
        ],
      },
    ];
    return of(mock).pipe(delay(300));
  }
}
