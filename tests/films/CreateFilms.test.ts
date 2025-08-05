import { describe, it, expect } from 'vitest';
import { createFilm } from '../../src/films/application/CreateFilm.ts';
import { Film } from '../../src/films/domain/Film.ts';

describe('createFilm', () => {
  it('returns a film', () => {
    const film = createFilm('123', new Date(456), '789', ['012']);
    expect(film).toBeInstanceOf(Film);
  });
});
