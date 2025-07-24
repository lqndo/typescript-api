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

app.get('/film', (c) => {
  return c.json(listFilm());
});
