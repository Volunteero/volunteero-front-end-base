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
  registerResource(name: string, resourceRoute: string, method?: string): void;

  /**
   * Returns an aggregated full route of the resource specified by the name
   * the response is a string of a form `<baseUrl><resource>`
   * @param name 
   */
  getResourceRoute(name: string): string | null;

  /**
   * Returns an aggregated full route of the resource with the method assigned to it
   * @param name 
   */
  getResourceObject(name: string): { route: string, method: string }
}

export class SimpleUrlAggregator implements RouteAggregator {
  private resourceDirectory = {}
  constructor(private baseRoute: string) { }

  setBaseRoute(route: string): void {
    this.baseRoute = route;
  }
  registerResource(name: string, resourceRoute: string, method?: string): void {
    this.resourceDirectory[name] = resourceRoute;
  }
  getResourceRoute(name: string): string {
    const base = this._stripEndingSlash(this.baseRoute);
    const resource = this.resourceDirectory[name];
    return `${base}/${resource}`;
  }
  // FIXME: it does not work
  private _stripEndingSlash(str: string) {
    return str.replace(/\:$/, '');
  }
  getResourceObject(name: string): { route: string; method: string; } {
    return {
      route: this.getResourceRoute(name),
      method: 'get'
    }
  }
}

export class MethodBasedUrlAggregator implements RouteAggregator {
  private resourceDirectory = {}
  constructor(private baseRoute: string) { }

  setBaseRoute(route: string): void {
    this.baseRoute = route;
  }
  registerResource(name: string, resourceRoute: string, method?: string): void {
    this.resourceDirectory[name] = {
      route: resourceRoute,
      method
    };
  }
  getResourceRoute(name: string): string {
    const base = this._stripEndingSlash(this.baseRoute);
    const resource = this.resourceDirectory[name];
    return `${base}/${resource.route}`;
  }
  getResourceMethod(name: string): string {
    return this.resourceDirectory[name].method;
  }
  getResourceObject(name: string): { route: string, method: string } {
    const route = this.getResourceRoute(name);
    const method = this.getResourceMethod(name);
    return { route, method }
  }
  private _stripEndingSlash(str: string) {
    return str.replace(/\:$/, '');
  }
}


export class RouteAggregatorFactory {
  static createSimpleUrlAggregator(baseUrl: string): SimpleUrlAggregator {
    return new SimpleUrlAggregator(baseUrl);
  }
  static createMethodBasedUrlAggregator(baseUrl: string): MethodBasedUrlAggregator {
    return new MethodBasedUrlAggregator(baseUrl);
  }
}