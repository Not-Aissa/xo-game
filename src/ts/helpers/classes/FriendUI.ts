import Div from "../../types/elements/Div";
import Span from "../../types/elements/Span";
import dom from "./Dom";
import Friend from "./Friend";
import XOGame from "./XOGame";

const canvasSquares = dom.selectAll<Div>(".canvas-square");
const friendWinTimes = dom.select<Span>("#friend_win_times");

class FriendUI {
  private _xoGame: XOGame;
  private _friend: Friend;

  public constructor(xoGame: XOGame) {
    this._xoGame = xoGame;
    this._friend = this._xoGame.friend;
  }

  public addPlayerCanvasSquareActiveClass(canvasSquare: Div): void {
    dom.classList(canvasSquare, "add", "active");

    dom.classList(canvasSquare.children[0], "add", "friend");
  }

  public removeCanvasSquaresHideClass(): void {
    canvasSquares.forEach((canvasSquare) => {
      dom.classList(canvasSquare, "remove", "disable");
    });
  }

  public handleFriendWinTimes(): void {
    friendWinTimes.textContent = `${this._friend.winTimes}`;
  }

  public checkIsFriendWinInThreeRows(): void {
    if (
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("tr")) ||
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("cl") &&
        this._friend.playedCanvasSquares.includes("bl")) ||
      (this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bc1")) ||
      (this._friend.playedCanvasSquares.includes("tr") &&
        this._friend.playedCanvasSquares.includes("cr") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tr") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bl")) ||
      (this._friend.playedCanvasSquares.includes("cl") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("cr")) ||
      (this._friend.playedCanvasSquares.includes("bl") &&
        this._friend.playedCanvasSquares.includes("bc1") &&
        this._friend.playedCanvasSquares.includes("br"))
    ) {
      this._xoGame.updateGameWinner("friend");

      this._xoGame.gameOver();
    }
  }

  public checkIsFriendWinInFourRows(): void {
    if (
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("tc2")) ||
      (this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("tr")) ||
      (this._friend.playedCanvasSquares.includes("cl") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("cc2")) ||
      (this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("cr")) ||
      (this._friend.playedCanvasSquares.includes("bl") &&
        this._friend.playedCanvasSquares.includes("bc1") &&
        this._friend.playedCanvasSquares.includes("bc2")) ||
      (this._friend.playedCanvasSquares.includes("bc1") &&
        this._friend.playedCanvasSquares.includes("bc2") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("cl") &&
        this._friend.playedCanvasSquares.includes("bl")) ||
      (this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bc1")) ||
      (this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("bc2")) ||
      (this._friend.playedCanvasSquares.includes("tr") &&
        this._friend.playedCanvasSquares.includes("cr") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bc2")) ||
      (this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tr") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("bc1")) ||
      (this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bl"))
    ) {
      this._xoGame.updateGameWinner("friend");

      this._xoGame.gameOver();
    }
  }

  public checkIsFriendWinInFiveRows(): void {
    if (
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("tc2")) ||
      (this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("tc3")) ||
      (this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("tc3") &&
        this._friend.playedCanvasSquares.includes("tr")) ||
      (this._friend.playedCanvasSquares.includes("cl") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("cc2")) ||
      (this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("cc3")) ||
      (this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("cc3") &&
        this._friend.playedCanvasSquares.includes("cr")) ||
      (this._friend.playedCanvasSquares.includes("bl") &&
        this._friend.playedCanvasSquares.includes("bc1") &&
        this._friend.playedCanvasSquares.includes("bc2")) ||
      (this._friend.playedCanvasSquares.includes("bc1") &&
        this._friend.playedCanvasSquares.includes("bc2") &&
        this._friend.playedCanvasSquares.includes("bc3")) ||
      (this._friend.playedCanvasSquares.includes("bc2") &&
        this._friend.playedCanvasSquares.includes("bc3") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("cl") &&
        this._friend.playedCanvasSquares.includes("bl")) ||
      (this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bc1")) ||
      (this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("bc2")) ||
      (this._friend.playedCanvasSquares.includes("tc3") &&
        this._friend.playedCanvasSquares.includes("cc3") &&
        this._friend.playedCanvasSquares.includes("bc3")) ||
      (this._friend.playedCanvasSquares.includes("tr") &&
        this._friend.playedCanvasSquares.includes("cr") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tl") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bc2")) ||
      (this._friend.playedCanvasSquares.includes("tc1") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("bc3")) ||
      (this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("cc3") &&
        this._friend.playedCanvasSquares.includes("br")) ||
      (this._friend.playedCanvasSquares.includes("tr") &&
        this._friend.playedCanvasSquares.includes("cc3") &&
        this._friend.playedCanvasSquares.includes("bc2")) ||
      (this._friend.playedCanvasSquares.includes("tc3") &&
        this._friend.playedCanvasSquares.includes("cc2") &&
        this._friend.playedCanvasSquares.includes("bc1")) ||
      (this._friend.playedCanvasSquares.includes("tc2") &&
        this._friend.playedCanvasSquares.includes("cc1") &&
        this._friend.playedCanvasSquares.includes("bl"))
    ) {
      this._xoGame.updateGameWinner("friend");

      this._xoGame.gameOver();
    }
  }
}

export default FriendUI;
