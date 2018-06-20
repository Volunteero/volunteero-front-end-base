import { UserToken } from "./Token";

export interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  country: string;
  bio: string;
  accessToken: string;
}

// TODO: create the builder class for the interface instantiation?
export class TokenBasedUser implements User {
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  country: string;
  bio: string;
  constructor(
    public id: string = '',
    public username: string = '',
    public accessToken: string = '') {
  }
}

export class UserFactory {
  static createUserFromToken(token: UserToken, tokenString: string) {
    return new TokenBasedUser(token.id, token.username, tokenString);
  }
}