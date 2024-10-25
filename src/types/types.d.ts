
export interface User {
  displayName: string;
  email: string;
  password: string
}

export type UserWithoutDisplayName = Omit<User, 'displayName'>;