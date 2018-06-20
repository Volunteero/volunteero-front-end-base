export interface ActionCap {
  title: string,
  id: string
};

export class ComponentSwitchCap implements ActionCap {
  private _active: boolean;

  /**
   * A cap used to switch components. 
   * Needs a component class reference.
   * @param title 
   * @param id 
   * @param _component - a component reference
   */
  constructor(public title: string, public id: string, private _component: any) {
    this._active = false;
  }

  get active() {
    return this._active;
  }

  set active(value: boolean){
    this._active = value;
  }

  get component() {
    return this._component;
  }

  /**
   * Sets the cap's state to active and returns the reference to self
   */
  activate() : ComponentSwitchCap {
    this.active = true;
    return this;
  }
  /**
   * Sets the cap's active state to false and returns the reference to self
   */
  deactivate() : ComponentSwitchCap {
    this.active = false;
    return this;
  }
};

export class RouteSwitchCap implements ActionCap {

  constructor(
    public title: string,
    public id: string,
    private _route: string,
    private _iconClass: string = '',
    private _authorized: boolean = false
  ) {
  }

  get route() {
    return this._route;
  }

  get iconClass() {
    return this._iconClass;
  }

  get authorized() { 
    return this._authorized;
  }

  setAuthorizedLevel(value: boolean){
    this._authorized = value;
    return this;
  }

  /**
   * Set the authorization level to true and return self-reference
   */
  authorize(){
    return this.setAuthorizedLevel(true);
  }
  /**
   * Set the authorization level to false and return the reference to self
   */
  deauthorize(){
    return this.setAuthorizedLevel(false);
  }
}

export class ActionCapFactory {
  static createComponentSwitchCap(
    title: string, id: string, component: any
  ): ComponentSwitchCap {
    return new ComponentSwitchCap(title, id, component);
  }

  static createRouteSwitchCap(
    title: string, id: string, route: string
  ): RouteSwitchCap {
    return new RouteSwitchCap(title, id, route);
  }
}