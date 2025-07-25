import { Film } from '../domain/Film.ts';

export function listFilms(): Film[] {
  let films = [];
  for (let i = 0; i < 10; ++i) {
    let index = i.toString();
    let film = new Film(index, new Date(index), index, ['Array', index]);
    films.push(film);
  }
  return films;
}
