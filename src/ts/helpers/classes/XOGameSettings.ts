import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import GameTheme from "../types/GameTheme";

class XOGameSettings {
  private _theme: GameTheme;
  private _isNotificationsShowed: boolean;

  public constructor() {
    this._theme = storageGet("theme", false) || "dark";
    this._isNotificationsShowed = localStorage.getItem("isNotificationsShowed")
      ? storageGet("isNotificationsShowed", true)
      : true;
  }

  public updateTheme(theme: GameTheme): void {
    this._theme = theme;

    storageSet("theme", this._theme);
  }

  public updateNotificationsShowState(show: boolean): void {
    this._isNotificationsShowed = show;

    storageSet("isNotificationsShowed", this._isNotificationsShowed);
  }

  public get theme(): GameTheme {
    return this._theme;
  }

  public get isNotificationsShowed(): boolean {
    return this._isNotificationsShowed;
  }
}

export default XOGameSettings;
