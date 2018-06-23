export interface RouteAggregator {
  /**
   * Sets the base (works as a prefix) of all the aggregated resources
   * @param route 
   */
  setBaseRoute(route: string): void;
  
  /**
   * Registers the resource route suffix under a specific name
   * @param name 
   * @param resourceRoute 
   */
  registerResource(name: string, resourceRoute: string): void;

  /**
   * Returns an aggregated full route of the resource specified by the name
   * the response is a string of a form `<baseUrl><resource>`
   * @param name 
   */
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

export class RouteAggregatorFactory {
  static createSimpleUrlAggregator(baseUrl: string): SimpleUrlAggregator {
    return new SimpleUrlAggregator(baseUrl);
  }
}