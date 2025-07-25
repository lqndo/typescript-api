import { describe, it, expect } from 'vitest';
import { Film } from '../../src/films/domain/Film.ts';
import { listFilms } from '../../src/films/application/ListFilms.ts';

describe('listFilms', () => {
  it('returns all films', () => {
    const films = listFilms();

    for (const film of films) {
      expect(film).toBeInstanceOf(Film);
    }
  });
});
