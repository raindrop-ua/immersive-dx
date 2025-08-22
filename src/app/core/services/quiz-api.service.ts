import { Injectable } from '@angular/core';
import { delay, of, Observable } from 'rxjs';
import { Question } from '@shared/models/question.model';

@Injectable({ providedIn: 'root' })
export class QuizApiService {
  getQuestions(): Observable<Question[]> {
    const mock: Question[] = [
      {
        id: '1',
        text: 'What does ChangeDetectionStrategy.OnPush do in Angular?',
        correctOptionId: 'b',
        options: [
          {
            id: 'a',
            text: 'Triggers change detection on every microtask',
            description: 'Aggressive detection for all async tasks',
          },
          {
            id: 'b',
            text: 'Limits checks to input reference changes and explicit marks',
            description:
              'Detects on @Input ref change, events, and manual marks',
          },
          {
            id: 'c',
            text: 'Disables change detection entirely',
            description: 'Only manual rendering',
          },
          {
            id: 'd',
            text: 'Forces checks on every animation frame',
            description: 'Like a game loop',
          },
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
