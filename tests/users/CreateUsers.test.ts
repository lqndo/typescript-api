import { describe, it, expect } from 'vitest';
import { createUser } from '../../src/users/application/CreateUsers.ts';
import { User } from '../../src/users/domain/User.ts';

describe('createUser', () => {
  it('returns a user', () => {
    const user = createUser('123', '456', '789');
    expect(user).toBeInstanceOf(User);
  });
});
