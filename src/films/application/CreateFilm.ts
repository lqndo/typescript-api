import { Film } from '../domain/Film.ts';

export function createFilm(
  title: string,
  date: Date,
  synopsis: string,
  genres: string[]
): Film {
  return new Film(title, date, synopsis, genres);
}
