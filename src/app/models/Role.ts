export interface ResponseRole {
  entityType?: string;
  entityIdentifier?: string;
  roleName: string;
  arn: string;
  /**
   *  permissions set for the role in format: 
   */
  permissions: string[];

}

export interface Role {
  entityId?: string;
  // displayName: string;
  title?: string;
  // level: string;
  // location: string;
  // imageUrl: string;
  accessToken?: string;

  setAccessToken(tokenString: string): void;
}

export class SimpleRole implements Role {
  // level: string;
  // location: string;
  // imageUrl: string;
  accessToken: string;
  constructor(public entityId: string, public title: string) { }

  setAccessToken(tokenString: string) {
    this.accessToken = tokenString;
  }
}

export class LeveledRole implements Role {
  // location: string;
  // imageUrl: string;
  accessToken: string;
  constructor(public entityId: string, public title: string, public level: string) { }

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

  static createLeveledRole(role: ResponseRole): Role {
    return new LeveledRole(role.entityIdentifier, role.entityType, role.roleName)
  }
}