import { Hono } from 'hono';
import { listFilms } from '../application/ListFilms.ts';
import { createFilm } from '../application/CreateFilm.ts';

export const filmEndpoints = new Hono();

filmEndpoints.get('/films', (context) => {
  return context.json(listFilms());
});

filmEndpoints.get('/films/:id', (context) => {
  const itemId = context.req.param('id');
  const index = Number(itemId);
  const users = listFilms();
  return context.json(users[index]);
});

filmEndpoints.post('/films', async (context) => {
  const body = await context.req.json();
  const { title, date, synopsis, genres } = body;
  console.log('Creating film:', body);
  createFilm(title, date, synopsis, genres);
  return context.json(
    { message: 'Film created successfully', data: body },
    201
  );
});
