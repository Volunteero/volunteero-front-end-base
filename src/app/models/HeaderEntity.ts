export interface HeaderEntity {
  displayName: string;
  location: string;
  points: number;
  contactName: string;
}

//TODO: lookup design patterns that could work well here

export class BasicHeaderEntity implements HeaderEntity {
  constructor(
    readonly displayName: string,
    readonly location: string,
    readonly points: number,
    readonly contactName: string
  ) { }
}


export class HeaderEntityFactory {
  static buildBasicHeaderEntity(
    displayName: string,
    location: string,
    points: number,
    contactName: string
  ): HeaderEntity {
    return new BasicHeaderEntity(displayName, location, points, contactName);
  }
}