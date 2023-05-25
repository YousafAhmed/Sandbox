 export interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

export interface UserState {
  isLoading: boolean;
  users: User[];
}
