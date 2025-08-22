export interface Question {
  id: string;
  text: string;
  description?: string;
  options: Option[];
  correctOptionId: string;
}

export interface Option {
  id: string;
  text: string;
  description?: string;
}
