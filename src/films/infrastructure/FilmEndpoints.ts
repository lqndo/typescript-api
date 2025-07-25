import { Hono } from 'hono';
import { listFilms } from '../application/ListFilms.ts';

export const filmEndpoints = new Hono();

filmEndpoints.get('/films', (c) => {
  return c.json(listFilms());
});
