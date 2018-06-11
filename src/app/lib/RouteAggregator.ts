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
    return this.resourceDirectory[name];
  }
}