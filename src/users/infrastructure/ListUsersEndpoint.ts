import { Hono } from 'hono';
import { listUsers } from '../application/ListUsers.ts';
import { listFilm } from '/workspace/src/films/application/listFilms.ts';

export const app = new Hono();

app.get('/hello', (c) => {
  return c.text('Hello, Hono with TypeScript!');
});

app.get('/users', (c) => {
  return c.json(listUsers());
});

app.get('/users/:id', (c) => {
  const itemId = c.req.param('id');
  const index = Number(itemId);
  const users = listUsers();
  return c.json(users[index]);
});

app.get('/films', (c) => {
  return c.json(listFilm());
});
