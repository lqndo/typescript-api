import { User } from '../domain/User.ts';

export function listUsers(): User[] {
  let users = [];
  for (let i = 0; i < 10; ++i) {
    let index = i.toString();
    let user = new User('passwd', index + '@gmail.com', index);
    users.push(user);
  }
  return users;
}
