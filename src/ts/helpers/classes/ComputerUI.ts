import Div from "../../types/elements/Div";
import Span from "../../types/elements/Span";
import Computer from "./Computer";
import dom from "./Dom";
import XOGame from "./XOGame";

const canvasSquares = dom.selectAll<Div>(".canvas-square");
const computerWinTimes = dom.select<Span>("#computer_win_times");

class ComputerUI {
  private _xoGame: XOGame;
  private _computer: Computer;

  public constructor(xoGame: XOGame) {
    this._xoGame = xoGame;
    this._computer = this._xoGame.computer;
  }

  public addComputerCanvasSquareActiveClass(canvasSquare: Div): void {
    dom.classList(canvasSquare, "add", "active");

    dom.classList(canvasSquare.children[0], "add", "computer");
  }

  public removeCanvasSquaresHideClass(): void {
    canvasSquares.forEach((canvasSquare) => {
      dom.classList(canvasSquare, "remove", "disable");
    });
  }

  public handleComputerWinTimes(): void {
    computerWinTimes.textContent = `${this._computer.winTimes}`;
  }

  public checkIsComputerWinInThreeRows(): void {
    if (
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("tr")) ||
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("cl") &&
        this._computer.playedCanvasSquares.includes("bl")) ||
      (this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bc1")) ||
      (this._computer.playedCanvasSquares.includes("tr") &&
        this._computer.playedCanvasSquares.includes("cr") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tr") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bl")) ||
      (this._computer.playedCanvasSquares.includes("cl") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("cr")) ||
      (this._computer.playedCanvasSquares.includes("bl") &&
        this._computer.playedCanvasSquares.includes("bc1") &&
        this._computer.playedCanvasSquares.includes("br"))
    ) {
      this._xoGame.updateGameWinner("computer");

      this._xoGame.gameOver();
    }
  }

  public checkIsComputerWinInFourRows(): void {
    if (
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("tc2")) ||
      (this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("tr")) ||
      (this._computer.playedCanvasSquares.includes("cl") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("cc2")) ||
      (this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("cr")) ||
      (this._computer.playedCanvasSquares.includes("bl") &&
        this._computer.playedCanvasSquares.includes("bc1") &&
        this._computer.playedCanvasSquares.includes("bc2")) ||
      (this._computer.playedCanvasSquares.includes("bc1") &&
        this._computer.playedCanvasSquares.includes("bc2") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("cl") &&
        this._computer.playedCanvasSquares.includes("bl")) ||
      (this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bc1")) ||
      (this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("bc2")) ||
      (this._computer.playedCanvasSquares.includes("tr") &&
        this._computer.playedCanvasSquares.includes("cr") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bc2")) ||
      (this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tr") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("bc1")) ||
      (this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bl"))
    ) {
      this._xoGame.updateGameWinner("computer");

      this._xoGame.gameOver();
    }
  }

  public checkIsComputerWinInFiveRows(): void {
    if (
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("tc2")) ||
      (this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("tc3")) ||
      (this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("tc3") &&
        this._computer.playedCanvasSquares.includes("tr")) ||
      (this._computer.playedCanvasSquares.includes("cl") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("cc2")) ||
      (this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("cc3")) ||
      (this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("cc3") &&
        this._computer.playedCanvasSquares.includes("cr")) ||
      (this._computer.playedCanvasSquares.includes("bl") &&
        this._computer.playedCanvasSquares.includes("bc1") &&
        this._computer.playedCanvasSquares.includes("bc2")) ||
      (this._computer.playedCanvasSquares.includes("bc1") &&
        this._computer.playedCanvasSquares.includes("bc2") &&
        this._computer.playedCanvasSquares.includes("bc3")) ||
      (this._computer.playedCanvasSquares.includes("bc2") &&
        this._computer.playedCanvasSquares.includes("bc3") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("cl") &&
        this._computer.playedCanvasSquares.includes("bl")) ||
      (this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bc1")) ||
      (this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("bc2")) ||
      (this._computer.playedCanvasSquares.includes("tc3") &&
        this._computer.playedCanvasSquares.includes("cc3") &&
        this._computer.playedCanvasSquares.includes("bc3")) ||
      (this._computer.playedCanvasSquares.includes("tr") &&
        this._computer.playedCanvasSquares.includes("cr") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tl") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bc2")) ||
      (this._computer.playedCanvasSquares.includes("tc1") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("bc3")) ||
      (this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("cc3") &&
        this._computer.playedCanvasSquares.includes("br")) ||
      (this._computer.playedCanvasSquares.includes("tr") &&
        this._computer.playedCanvasSquares.includes("cc3") &&
        this._computer.playedCanvasSquares.includes("bc2")) ||
      (this._computer.playedCanvasSquares.includes("tc3") &&
        this._computer.playedCanvasSquares.includes("cc2") &&
        this._computer.playedCanvasSquares.includes("bc1")) ||
      (this._computer.playedCanvasSquares.includes("tc2") &&
        this._computer.playedCanvasSquares.includes("cc1") &&
        this._computer.playedCanvasSquares.includes("bl"))
    ) {
      this._xoGame.updateGameWinner("computer");

      this._xoGame.gameOver();
    }
  }
}

export default ComputerUI;
