export interface HeaderEntity {
  title: string;
  subtitle: string;
  extras: string[];
  pluginComponent?: any;
  imageUrl?: string
}

//TODO: lookup design patterns that could work well here

export class BasicHeaderEntity implements HeaderEntity {
  constructor(
    readonly title: string,
    readonly subtitle: string,
    readonly extras: string[],
    readonly pluginComponent?: any,
    readonly imageUrl?: string
  ) { }
}


export class HeaderEntityFactory {
  static createBasicHeaderEntity(
    title: string,
    subtitle: string,
    extras: string[] = [],
    pluginComponent?: any
  ): HeaderEntity {
    return new BasicHeaderEntity(title, subtitle, extras, pluginComponent);
  }
}