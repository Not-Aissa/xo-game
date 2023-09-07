import Div from "../../types/elements/Div";
import Span from "../../types/elements/Span";
import dom from "./Dom";
import Player1 from "./Player1";
import XOGame from "./XOGame";

const canvasSquares = dom.selectAll<Div>(".canvas-square");
const yourWinTimes = dom.select<Span>("#your_win_times");

class Player1UI {
  private _xoGame: XOGame;
  private _player1: Player1;

  public constructor(xoGame: XOGame) {
    this._xoGame = xoGame;
    this._player1 = this._xoGame.player1;
  }

  public addPlayerCanvasSquareActiveClass(canvasSquare: Div): void {
    dom.classList(canvasSquare, "add", "active");

    dom.classList(canvasSquare.children[0], "add", "you");
  }

  public addCanvasSquaresHideClass(): void {
    canvasSquares.forEach((canvasSquare) => {
      dom.classList(canvasSquare, "add", "disable");
    });
  }

  public handlePlayerWinTimes(): void {
    yourWinTimes.textContent = `${this._player1.winTimes}`;
  }

  public checkIsPlayerWinInThreeRows(): void {
    if (
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("tr")) ||
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("cl") &&
        this._player1.playedCanvasSquares.includes("bl")) ||
      (this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bc1")) ||
      (this._player1.playedCanvasSquares.includes("tr") &&
        this._player1.playedCanvasSquares.includes("cr") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tr") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bl")) ||
      (this._player1.playedCanvasSquares.includes("cl") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("cr")) ||
      (this._player1.playedCanvasSquares.includes("bl") &&
        this._player1.playedCanvasSquares.includes("bc1") &&
        this._player1.playedCanvasSquares.includes("br"))
    ) {
      this._xoGame.updateGameWinner("you");

      this._xoGame.gameOver();
    }
  }

  public checkIsPlayerWinInFourRows(): void {
    if (
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("tc2")) ||
      (this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("tr")) ||
      (this._player1.playedCanvasSquares.includes("cl") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("cc2")) ||
      (this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("cr")) ||
      (this._player1.playedCanvasSquares.includes("bl") &&
        this._player1.playedCanvasSquares.includes("bc1") &&
        this._player1.playedCanvasSquares.includes("bc2")) ||
      (this._player1.playedCanvasSquares.includes("bc1") &&
        this._player1.playedCanvasSquares.includes("bc2") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("cl") &&
        this._player1.playedCanvasSquares.includes("bl")) ||
      (this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bc1")) ||
      (this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("bc2")) ||
      (this._player1.playedCanvasSquares.includes("tr") &&
        this._player1.playedCanvasSquares.includes("cr") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bc2")) ||
      (this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tr") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("bc1")) ||
      (this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bl"))
    ) {
      this._xoGame.updateGameWinner("you");

      this._xoGame.gameOver();
    }
  }

  public checkIsPlayerWinInFiveRows(): void {
    if (
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("tc2")) ||
      (this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("tc3")) ||
      (this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("tc3") &&
        this._player1.playedCanvasSquares.includes("tr")) ||
      (this._player1.playedCanvasSquares.includes("cl") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("cc2")) ||
      (this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("cc3")) ||
      (this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("cc3") &&
        this._player1.playedCanvasSquares.includes("cr")) ||
      (this._player1.playedCanvasSquares.includes("bl") &&
        this._player1.playedCanvasSquares.includes("bc1") &&
        this._player1.playedCanvasSquares.includes("bc2")) ||
      (this._player1.playedCanvasSquares.includes("bc1") &&
        this._player1.playedCanvasSquares.includes("bc2") &&
        this._player1.playedCanvasSquares.includes("bc3")) ||
      (this._player1.playedCanvasSquares.includes("bc2") &&
        this._player1.playedCanvasSquares.includes("bc3") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("cl") &&
        this._player1.playedCanvasSquares.includes("bl")) ||
      (this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bc1")) ||
      (this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("bc2")) ||
      (this._player1.playedCanvasSquares.includes("tc3") &&
        this._player1.playedCanvasSquares.includes("cc3") &&
        this._player1.playedCanvasSquares.includes("bc3")) ||
      (this._player1.playedCanvasSquares.includes("tr") &&
        this._player1.playedCanvasSquares.includes("cr") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tl") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bc2")) ||
      (this._player1.playedCanvasSquares.includes("tc1") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("bc3")) ||
      (this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("cc3") &&
        this._player1.playedCanvasSquares.includes("br")) ||
      (this._player1.playedCanvasSquares.includes("tr") &&
        this._player1.playedCanvasSquares.includes("cc3") &&
        this._player1.playedCanvasSquares.includes("bc2")) ||
      (this._player1.playedCanvasSquares.includes("tc3") &&
        this._player1.playedCanvasSquares.includes("cc2") &&
        this._player1.playedCanvasSquares.includes("bc1")) ||
      (this._player1.playedCanvasSquares.includes("tc2") &&
        this._player1.playedCanvasSquares.includes("cc1") &&
        this._player1.playedCanvasSquares.includes("bl"))
    ) {
      this._xoGame.updateGameWinner("you");

      this._xoGame.gameOver();
    }
  }
}

export default Player1UI;
