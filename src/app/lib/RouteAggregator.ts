export interface RouteAggregator {
  setBaseRoute(route: string): void;
  registerResource(name: string, resourceRoute: string): void;
  getResourceRoute(name: string): string | null;
}

export class SimpleUrlAggregator implements RouteAggregator {
  private resourceDirectory = {}
  constructor(private baseRoute: string) { }

  setBaseRoute(route: string): void {
    this.baseRoute = route;
  }
  registerResource(name: string, resourceRoute: string): void {
    this.resourceDirectory[name] = resourceRoute;
  }
  getResourceRoute(name: string): string {
    const base = this._stripEndingSlash(this.baseRoute);
    const resource = this.resourceDirectory[name];
    return `${base}/${resource}`;
  }
  private _stripEndingSlash(str: string) {
    return str.replace(/\:$/, '');
  }
}