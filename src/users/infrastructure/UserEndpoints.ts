import { Hono } from 'hono';
import { listUsers } from '../application/ListUsers.ts';

export const userEndpoints = new Hono();

userEndpoints.get('/users', (c) => {
  return c.json(listUsers());
});

userEndpoints.get('/users/:id', (c) => {
  const itemId = c.req.param('id');
  const index = Number(itemId);
  const users = listUsers();
  return c.json(users[index]);
});
