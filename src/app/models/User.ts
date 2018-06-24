import { UserToken } from "./Token";

export interface User {
  id: string;
  user_id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  country: string;
  bio: string;
  accessToken: string;
  points?: number;
}

// TODO: create the builder class for the interface instantiation?
export class TokenBasedUser implements User {
  user_id: string;
  points?: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  country: string;
  bio: string;
  constructor(
    public id: string = '',
    public username: string = '',
    public accessToken: string = ''
  ) {
    this.user_id = id;
  }
}

export class UserFactory {
  static createUserFromToken(token: UserToken, tokenString: string) {
    return new TokenBasedUser(token.id, token.username, tokenString);
  }
  static createEmtpyUser() {
    return USER_STUB;
  }
}

export const USER_STUB = {
  id: '',
  user_id: '',
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  city: '',
  country: '',
  bio: '',
  accessToken: ''
}
