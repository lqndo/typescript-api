import { serve } from '@hono/node-server';
import { app } from './users/infrastructure/ListUsersEndpoint.ts';

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
