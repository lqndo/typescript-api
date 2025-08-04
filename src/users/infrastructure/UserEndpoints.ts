import { Hono } from 'hono';
import { listUsers } from '../application/ListUsers.ts';
import { ValidatePasswordRequirements } from '../application/ValidateUsersPassword.ts';

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

userEndpoints.post('/users', async (c) => {
  const body = await c.req.json();
  const { password } = body;
  let validated = ValidatePasswordRequirements(password);
  if (validated) {
    console.log('Creating user:', body);
    return c.json({ message: 'User created successfully', data: body }, 201);
  } else {
    console.log('User could not be created:', body);
    return c.json(
      { message: 'Given password does not match the requirements' },
      400
    );
  }
});
