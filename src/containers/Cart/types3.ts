export interface Cart {
    title: string;
    email: string;
    quantity: number;
    id: number;
  }
  
  export interface UserState {
    isLoading: boolean;
    cart: Cart[];
  }