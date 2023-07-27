export interface Cart {
    title: string;
    email: string;
    quantity: number;
    id: number;
    localStorage:Storage;
  }
  
  export interface UserState {
    isLoading: boolean;
    cart: Cart[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
    
    
  }