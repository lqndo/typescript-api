export class Film {
  title: string;
  date: Date;
  synopsis: string;
  genres: string[];

  constructor(title: string, date: Date, synopsis: string, genres: string[]) {
    this.title = title;
    this.date = date;
    this.synopsis = synopsis;
    this.genres = genres;
  }

  toString(): string {
    return (
      `Title: ${this.title}\n` +
      `Date: ${this.date.toDateString}\n` +
      `genres: ${this.genres.forEach}\n` +
      `Synopsis: ${this.synopsis}\n`
    );
  }
}
