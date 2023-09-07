import Div from "../../types/elements/Div";
import dom from "./Dom";
import Page from "./Page";

const gameHomeHeader = dom.select<Div>(".game-home-header");
const gameChooseRowsHeader = dom.select<Div>(".game-choose-rows-header");
const gameChoosePlayerHeader = dom.select<Div>(".game-choose-player-header");
const gameHeader = dom.select<Div>(".game-header");
const settingsHeader = dom.select<Div>(".settings-header");

class PageUI {
  public constructor(private _page: Page) {}

  public handlePageLocation(): void {
    switch (this._page.location) {
      case "home":
        dom.classList(gameChooseRowsHeader, "add", "hide");
        dom.classList(gameChoosePlayerHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(settingsHeader, "add", "hide");
        dom.classList(gameHomeHeader, "remove", "hide");
        break;

      case "choose-rows":
        dom.classList(gameHomeHeader, "add", "hide");
        dom.classList(gameChoosePlayerHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(settingsHeader, "add", "hide");
        dom.classList(gameChooseRowsHeader, "remove", "hide");
        break;

      case "choose-player":
        dom.classList(gameHomeHeader, "add", "hide");
        dom.classList(gameChooseRowsHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(settingsHeader, "add", "hide");
        dom.classList(gameChoosePlayerHeader, "remove", "hide");
        break;

      case "game":
        dom.classList(gameHomeHeader, "add", "hide");
        dom.classList(gameChooseRowsHeader, "add", "hide");
        dom.classList(gameChoosePlayerHeader, "add", "hide");
        dom.classList(settingsHeader, "add", "hide");
        dom.classList(gameHeader, "remove", "hide");
        break;

      case "settings":
        dom.classList(gameHomeHeader, "add", "hide");
        dom.classList(gameChooseRowsHeader, "add", "hide");
        dom.classList(gameChoosePlayerHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(settingsHeader, "remove", "hide");
        break;

      default:
        dom.classList(gameChooseRowsHeader, "add", "hide");
        dom.classList(gameChoosePlayerHeader, "add", "hide");
        dom.classList(gameHeader, "add", "hide");
        dom.classList(settingsHeader, "add", "hide");
        dom.classList(gameHomeHeader, "remove", "hide");
    }
  }
}

export default PageUI;
