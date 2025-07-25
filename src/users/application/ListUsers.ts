import { User } from '../domain/User.ts';

export function listUsers(): User[] {
  let users: User[] = [];
  for (let i = 0; i < 10; ++i) {
    let index: string = i.toString();
    let user: User = new User('passwd', index + '@gmail.com', index);
    users.push(user);
  }
  return users;
}
