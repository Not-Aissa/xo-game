import Div from "../../types/elements/Div";
import Span from "../../types/elements/Span";
import ComputerUI from "./ComputerUI";
import dom from "./Dom";
import FriendUI from "./FriendUI";
import Player1UI from "./Player1UI";
import XOGame from "./XOGame";

const xContainer = dom.select<Div>(".x-container");
const oContainer = dom.select<Div>(".o-container");
const gamePlaySection = dom.select<Div>(".game-play-section");
const cptActionsSection = dom.select<Div>(".cpt-actions-section");
const gameInfoSection = dom.select<Div>(".game-info-section");
const gameResult = dom.select<Span>("#game_result");
const gameDeveloper = dom.select<Span>("#game_developer");
const gameVersion = dom.select<Span>("#game_version");
const playCanvasSection = dom.select<Div>(".play-canvas-section");
const canvasSquares = dom.selectAll<Div>(".canvas-square");
const computerInfo = dom.select<Div>(".computer-info");
const friendInfo = dom.select<Div>(".friend-info");

class XOGameUI {
  private _player1UI: Player1UI;
  private _computerUI: ComputerUI;
  private _friendUI: FriendUI;

  public constructor(private _xoGame: XOGame) {
    this._player1UI = new Player1UI(this._xoGame);
    this._computerUI = new ComputerUI(this._xoGame);
    this._friendUI = new FriendUI(this._xoGame);
  }

  public handleGamePlayChoice(): void {
    switch (this._xoGame.player1.playChoice) {
      case "not-selected":
        dom.classList(xContainer, "remove", ["disable", "active"]);
        dom.classList(oContainer, "remove", ["disable", "active"]);
        break;

      case "x":
        dom.classList(oContainer, "add", "disable");
        dom.classList(xContainer, "add", "active");
        break;

      case "o":
        dom.classList(xContainer, "add", "disable");
        dom.classList(oContainer, "add", "active");
        break;

      default:
        dom.classList(xContainer, "remove", ["disable", "active"]);
        dom.classList(oContainer, "remove", ["disable", "active"]);
    }
  }

  public handleGamePlaySectionsHideClass(): void {
    if (this._xoGame.player1.playChoice === "not-selected") {
      dom.classList(gamePlaySection, "add", "hide");

      dom.classList(cptActionsSection, "add", "hide");

      dom.classList(gameInfoSection, "add", "hide");
    } else {
      dom.classList(gamePlaySection, "remove", "hide");

      dom.classList(cptActionsSection, "remove", "hide");

      dom.classList(gameInfoSection, "remove", "hide");
    }
  }

  public handlePlayCanvasSectionRows(): void {
    switch (this._xoGame.rows) {
      case "not-selected":
        dom.classList(playCanvasSection, "remove", [
          "three-rows",
          "four-rows",
          "five-rows",
        ]);
        break;

      case 3:
        dom.classList(playCanvasSection, "remove", ["four-rows", "five-rows"]);
        dom.classList(playCanvasSection, "add", "three-rows");
        break;

      case 4:
        dom.classList(playCanvasSection, "remove", ["three-rows", "five-rows"]);
        dom.classList(playCanvasSection, "add", "four-rows");
        break;

      case 5:
        dom.classList(playCanvasSection, "remove", ["three-rows", "four-rows"]);
        dom.classList(playCanvasSection, "add", "five-rows");
        break;

      default:
        dom.classList(playCanvasSection, "remove", [
          "three-rows",
          "four-rows",
          "five-rows",
        ]);
    }
  }

  public handleCanvasSquaresRows(): void {
    switch (this._xoGame.rows) {
      case "not-selected":
        break;

      case 3:
        canvasSquares.forEach((canvasSquare) => {
          dom.classList(canvasSquare, "remove", "hide");

          if (
            canvasSquare.classList.contains("tc2-square") ||
            canvasSquare.classList.contains("tc3-square") ||
            canvasSquare.classList.contains("cc2-square") ||
            canvasSquare.classList.contains("cc3-square") ||
            canvasSquare.classList.contains("bc2-square") ||
            canvasSquare.classList.contains("bc3-square")
          ) {
            dom.classList(canvasSquare, "add", "hide");
          }
        });
        break;

      case 4:
        canvasSquares.forEach((canvasSquare) => {
          dom.classList(canvasSquare, "remove", "hide");

          if (
            canvasSquare.classList.contains("tc3-square") ||
            canvasSquare.classList.contains("cc3-square") ||
            canvasSquare.classList.contains("bc3-square")
          ) {
            dom.classList(canvasSquare, "add", "hide");
          }
        });
        break;

      case 5:
        canvasSquares.forEach((canvasSquare) => {
          dom.classList(canvasSquare, "remove", "hide");
        });
        break;

      default:
        canvasSquares.forEach((canvasSquare) => {
          dom.classList(canvasSquare, "remove", "hide");
        });
    }
  }

  public showGameResultMessage(): void {
    gameResult.textContent = this._xoGame.gameResultMessage;
  }

  public handleGameCanvasReset(): void {
    canvasSquares.forEach((canvasSquare) => {
      canvasSquare.children[0].textContent = "";

      dom.classList(canvasSquare.children[0], "remove", [
        "you",
        "computer",
        "friend",
      ]);

      dom.classList(canvasSquare, "remove", ["active", "disable"]);
    });
  }

  public handlePlayerWin(): void {
    switch (this._xoGame.rows) {
      case "not-selected":
        break;

      case 3:
        this._player1UI.checkIsPlayerWinInThreeRows();
        break;

      case 4:
        this._player1UI.checkIsPlayerWinInFourRows();
        break;

      case 5:
        this._player1UI.checkIsPlayerWinInFiveRows();
        break;

      default:
        this._player1UI.checkIsPlayerWinInThreeRows();
    }
  }

  public handleComputerWin(): void {
    switch (this._xoGame.rows) {
      case "not-selected":
        break;

      case 3:
        this._computerUI.checkIsComputerWinInThreeRows();
        break;

      case 4:
        this._computerUI.checkIsComputerWinInFourRows();
        break;

      case 5:
        this._computerUI.checkIsComputerWinInFiveRows();
        break;

      default:
        this._computerUI.checkIsComputerWinInThreeRows();
    }
  }

  public handleFriendWin(): void {
    switch (this._xoGame.rows) {
      case "not-selected":
        break;

      case 3:
        this._friendUI.checkIsFriendWinInThreeRows();
        break;

      case 4:
        this._friendUI.checkIsFriendWinInFourRows();
        break;

      case 5:
        this._friendUI.checkIsFriendWinInFiveRows();
        break;

      default:
        this._friendUI.checkIsFriendWinInThreeRows();
    }
  }

  public disableGameCanvasSquares(): void {
    canvasSquares.forEach((canvasSquare) => {
      dom.classList(canvasSquare, "add", "disable");
    });
  }

  public handleEnemy(): void {
    if (this._xoGame.enemy === "computer") {
      dom.classList(friendInfo, "add", "hide");
      dom.classList(computerInfo, "remove", "hide");
    }

    if (this._xoGame.enemy === "friend") {
      dom.classList(computerInfo, "add", "hide");
      dom.classList(friendInfo, "remove", "hide");
    }
  }

  public showGameDeveloper(): void {
    gameDeveloper.textContent = this._xoGame.developer;
  }

  public showGameVersion(): void {
    gameVersion.textContent = `${this._xoGame.version}`;
  }
}

export default XOGameUI;
