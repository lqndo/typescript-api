import { Film } from '/workspace/src/films/domain/Film.ts';

export function listFilm(): Film[] {
  let films: Film[] = [];
  for (let i = 0; i < 10; ++i) {
    let index: string = i.toString();
    let film: Film = new Film(index, new Date(index), index, ['Array', index]);
    films.push(film);
  }
  return films;
}
