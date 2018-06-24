export interface HeaderEntity {
  title: string;
  subtitle: string;
  extras?: string[] | String[];
  pluginComponent?: any;
  imageUrl?: string
}

//TODO: lookup design patterns that could work well here

export class BasicHeaderEntity implements HeaderEntity {
  constructor(
    readonly title: string,
    readonly subtitle: string,
    readonly extras: string[] | String[],
    readonly pluginComponent?: any,
    readonly imageUrl?: string
  ) { }
}


export class HeaderEntityFactory {
  static createBasicHeaderEntity(
    title: string | String,
    subtitle: string | String,
    extras: string[] | String[] = [],
    pluginComponent?: any
  ): HeaderEntity {
    return new BasicHeaderEntity(String(title), String(subtitle), extras, pluginComponent);
  }
}