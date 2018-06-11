export interface Role {
  id?: string;
  // displayName: string;
  title?: string;
  // level: string;
  // location: string;
  // imageUrl: string;
  accessToken?: string;
}

export class SimpleRole implements Role {
  // level: string;
  // location: string;
  // imageUrl: string;
  accessToken: string;
  constructor(public id: string, public title: string) { }

  setAccessToken(tokenString: string) {
    this.accessToken = tokenString;
  }
}

export class LeveledRole implements Role {
  // location: string;
  // imageUrl: string;
  accessToken: string;
  constructor(public id: string, public title: string, public level: string) { }

  setAccessToken(tokenString: string) {
    this.accessToken = tokenString;
  }
}

export class RoleFactory {
  static createSimpleRole(roleId: string, roleTitle: string, tokenString: string = ''): Role {
    let role = new SimpleRole(roleId, roleTitle);
    role.setAccessToken(tokenString);
    return role;
  }

  /**
   * Returns a stab of a generic volunteero role
   * FIXME: should be worked out to be included in roles from backend!
   */
  static createGenericVolunteeroRole(): Role {
    return new LeveledRole('v_volunteero', 'Volunteer', 'hero');
  }
}