export type Item = {
  id: number;
  description: string;
  createdAt: string;
  idUserAuth: string;
};

export type Participation = {
  id: number;
  idParticipation: number;
  createdAt: string;
  cant: number;
  idProduct: number;
};
