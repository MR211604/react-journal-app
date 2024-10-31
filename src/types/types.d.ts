
export interface User {
  displayName: string;
  email: string;
  password: string
}

export type UserWithoutDisplayName = Omit<User, 'displayName'>;

export interface Note {
  id?: string;
  title: string;
  body: string;
  date: number;
  imageURL?: string[];
}