import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { User } from '/workspace/src/modules/user.ts';

const app = new Hono();

app.get('/hello', (c) => {
  return c.text('Hello, Hono with TypeScript!');
});

let users: User[] = [];
for (let i = 0; i < 1000; ++i) {
  let index: string = i.toString();
  let user: User = new User('passwd', index + '@gmail.com', index);
  users.push(user);
}

function getUsers(users: User[]): string {
  if (!users || users.length === 0) {
    return 'No users';
  } else {
    let result: string = '';
    for (let i = 0; i < users.length; ++i) {
      result += users[i]!.toString() + '\n';
    }
    return result;
  }
}

app.get('/users', (c) => {
  return c.text(getUsers(users));
});

serve(
  {
    fetch: app.fetch,
    port: 8000
  },
  (info) => {
    const url = `http://localhost:${info.port}`;
    console.log(`Server listening on ${url}`);
  }
);
