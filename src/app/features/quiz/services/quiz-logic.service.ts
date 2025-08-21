import { computed, inject, signal } from '@angular/core';
import { QuizApiService } from '@services/quiz-api.service';
import { Question } from '@shared/models/question.model';

export class QuizLogicService {
  private api = inject(QuizApiService);

  private readonly _questions = signal<Question[]>([]);
  private readonly _currentIndex = signal(0);
  private readonly _answers = signal<Map<string, string>>(new Map());

  readonly questions = this._questions.asReadonly();
  readonly currentIndex = this._currentIndex.asReadonly();
  readonly answers = this._answers.asReadonly();

  readonly currentQuestion = computed(() => {
    const qs = this._questions();
    const i = this._currentIndex();
    return i >= 0 && i < qs.length ? qs[i] : undefined;
  });

  readonly total = computed(() => this._questions().length);

  readonly progress = computed(() => {
    const t = this.total();
    if (!t) return 0;
    return (this._currentIndex() + 1) / t;
  });

  constructor() {
    this.api.getQuestions().subscribe((qs: Question[]) => {
      this._questions.set(qs);
      this._currentIndex.set(0);
      this._answers.set(new Map());
    });
  }

  selectAnswer(questionId: string, optionId: string): void {
    this._answers.update((prev) => {
      const next = new Map(prev);
      next.set(questionId, optionId);
      return next;
    });
  }

  next(): boolean {
    const i = this._currentIndex();
    const last = this.total() - 1;
    if (i < last) {
      this._currentIndex.set(i + 1);
      return true;
    }
    return false;
  }

  reset(): void {
    this._currentIndex.set(0);
    this._answers.set(new Map());
  }

  getResult(): { correct: number; total: number } {
    const qs = this._questions();
    const a = this._answers();
    let correct = 0;
    for (const q of qs) {
      if (a.get(q.id) === q.correctOptionId) correct++;
    }
    return { correct, total: qs.length };
  }
}
