import Select from "../../types/elements/Select";
import dom from "./Dom";
import XOGameSettings from "./XOGameSettings";

const themeSelect = dom.select<Select>("#theme_select");
const notificationsStateSelect = dom.select<Select>(
  "#notifications_state_select"
);

class XOGameSettingsUI {
  public constructor(private _xoGameSettings: XOGameSettings) {}

  public handleGameTheme(): void {
    if (this._xoGameSettings.theme === "light") {
      dom.classList(document.body, "remove", "dark");
      dom.classList(document.body, "add", "light");
    } else {
      dom.classList(document.body, "remove", "light");
      dom.classList(document.body, "add", "dark");
    }
  }

  public updateThemeSelect(): void {
    themeSelect.value = this._xoGameSettings.theme;
  }

  public updateNotificationsSelect(): void {
    notificationsStateSelect.value = `${this._xoGameSettings.isNotificationsShowed}`;
  }
}

export default XOGameSettingsUI;
