
export interface UserToken {
  username: string;
  id: string;
}

export class JwtToken implements UserToken {
  constructor(
    public id: string = '',
    public username: string = '',
    public iat: number = 0,
    public exp: number = 0,
  ) { }
}

export class TokenManager {
  decode: Function;
  constructor(decodeFunction: Function) {
    this.decode = decodeFunction;
  }
  public decodeToUserToken(tokenString): UserToken {
    const tokenData = this.decode(tokenString);
    const token = new JwtToken(
      tokenData.id || '',
      tokenData.username || '',
      tokenData.iat || 0,
      tokenData.exp || 0
    )
    return token;
  }
}