export class User {
  private password: string;
  private email: string;
  username: string;

  // constructor(public username: string) {} but 'erasableSyntaxOnly' is enabled
  constructor(password: string, email: string, username: string) {
    this.password = password;
    this.email = email;
    this.username = username;
  }

  toString(): string {
    return `Name: ${this.username}`;
  }
}
