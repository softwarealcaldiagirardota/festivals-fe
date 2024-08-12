export const steps = ["Sabor", "Presentación", "Satisfacción"];

export interface IClientVotes {
  id: number;
  description: string;
  createdAt: string;
  idUserAuth: string;
}

export interface Answer {
  id: number;
  value: number;
  description: string;
}

export interface Question {
  id: number;
  value: number;
  answers: Answer[];
  description: string;
  step: number;
}

export interface Survey {
  id: number;
  description: string;
  question: Question[];
}
