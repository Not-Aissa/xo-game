import PageLocation from "../types/PageLocation";

class Page {
  private _location: PageLocation;

  public constructor() {
    this._location = "home";
  }

  public updateLocation(location: PageLocation): void {
    this._location = location;
  }

  public get location(): PageLocation {
    return this._location;
  }
}

export default Page;
