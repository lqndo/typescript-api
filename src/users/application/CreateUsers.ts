import { User } from '../domain/User.ts';

export function createUser(
  password: string,
  email: string,
  username: string
): User {
  return new User(password, email, username);
}
