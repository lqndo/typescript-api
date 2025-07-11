import { Hono } from 'hono';
import { listUsers } from '../application/ListUsers.ts';

export const app = new Hono();

app.get('/hello', (c) => {
  return c.text('Hello, Hono with TypeScript!');
});

app.get('/users', (c) => {
  return c.json(listUsers());
});
