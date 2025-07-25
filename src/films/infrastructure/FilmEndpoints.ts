import { Hono } from 'hono';
import { listFilm } from '../application/listFilms.ts';

export const filmEndpoints = new Hono();

filmEndpoints.get('/films', (c) => {
  return c.json(listFilm());
});
