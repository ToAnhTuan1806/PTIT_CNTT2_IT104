export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt?: number;
}

export type Filter = 'all' | 'active' | 'completed';
