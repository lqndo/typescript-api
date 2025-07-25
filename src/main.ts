import { serve } from '@hono/node-server';
import { filmEndpoints } from './films/infrastructure/FilmEndpoints.ts';
import { userEndpoints } from './users/infrastructure/UserEndpoints.ts';
import { Hono } from 'hono';

const app = new Hono();

app.route('/', filmEndpoints);
app.route('/', userEndpoints);

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
