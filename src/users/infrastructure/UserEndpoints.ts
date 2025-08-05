import { Hono } from 'hono';
import { listUsers } from '../application/ListUsers.ts';
import { ValidatePasswordRequirements } from '../application/ValidateUsersPassword.ts';
import { createUser } from '../application/CreateUsers.ts';

export const userEndpoints = new Hono();

userEndpoints.get('/users', (context) => {
  return context.json(listUsers());
});

userEndpoints.get('/users/:id', (context) => {
  const itemId = context.req.param('id');
  const index = Number(itemId);
  const users = listUsers();
  return context.json(users[index]);
});

userEndpoints.post('/users', async (context) => {
  const body = await context.req.json();
  const { password, email, username } = body;
  let validated = ValidatePasswordRequirements(password);
  if (validated) {
    console.log('Creating user:', body);
    createUser(password, email, username);
    return context.json(
      { message: 'User created successfully', data: body },
      201
    );
  } else {
    console.log('User could not be created:', body);
    return context.json(
      { message: 'Given password does not match the requirements' },
      400
    );
  }
});
