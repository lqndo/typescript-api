import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/hello', (c) => {
  return c.text('Hello, Hono with TypeScript!');
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
