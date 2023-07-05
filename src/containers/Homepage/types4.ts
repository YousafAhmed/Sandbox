export interface Preview {
  id: number;
  title: string;
  email: string;
}

export interface UserState {
  isLoading: boolean;
  preview: Preview[];
}
