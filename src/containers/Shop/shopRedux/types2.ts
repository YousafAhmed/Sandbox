export interface Product {
  id: number;
  title: string;
  email: string;
}

export interface UserState {
  isLoading: boolean;
  product: Product[];
}
