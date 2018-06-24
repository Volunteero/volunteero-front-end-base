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
  // FIXME: really? string or String...
  title?: string | String;
  level: string;
  // location: string;
  // imageUrl: string;
  accessToken?: string;
  /**
   * Corresponds to the property of a role being a placholder or actually valid
   */
  isReal: boolean;

  // added by Dijitar
  userHasOrganizationRole: boolean;

  setAccessToken(tokenString: string): void;

  setIsReal(flag: boolean): void;
}

export class SimpleRole implements Role {

  level: string;
  // location: string;
  // imageUrl: string;
  accessToken: string;
  public userHasOrganizationRole: boolean;

  isReal: boolean;

  constructor(public entityId: string, public title: string) {
    this.isReal = false;
  }


  setAccessToken(tokenString: string) {
    this.accessToken = tokenString;
  }


  setIsReal(flag: boolean) {
    this.isReal = flag;
  }

}

export class LeveledRole implements Role {
  // location: string;
  // imageUrl: string;
  accessToken: string;

  userHasOrganizationRole: boolean;

  constructor(
    public entityId: string,
    public title: string,
    public level: string,
    public isReal: boolean = false) {
  }

  setUserHasOrganizationRole(value: boolean) {
    this.userHasOrganizationRole = value;
  }

  setAccessToken(tokenString: string) {
    this.accessToken = tokenString;
  }

  setIsReal(flag: boolean): void {
    this.isReal = flag;
  }


}

export class RoleFactory {
  static createSimpleRole(roleId: string, roleTitle: string, tokenString: string = ''): Role {
    let role = new SimpleRole(roleId, roleTitle);
    role.setAccessToken(tokenString);

    return role;
  }

  /**
   * :D -> it will be harsh if it actually returns a stab
   * Returns a stab of a generic volunteero role
   * FIXME: should be worked out to be included in roles from backend!
   */
  static createGenericVolunteeroRole(): Role {
    return new LeveledRole('v_volunteero', 'Volunteer', 'hero');
  }

  static createLeveledRole(role: ResponseRole): Role {

    const newRole = new LeveledRole(role.entityIdentifier, role.entityType, role.roleName, true);
    newRole.setUserHasOrganizationRole(true);

    return newRole;

  }
}
