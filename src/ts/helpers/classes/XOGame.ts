import GameEnemy from "../types/GameEnemy";
import GamePlayTurn from "../types/GamePlayTurn";
import GameResultMessage from "../types/GameResultMessage";
import GameRows from "../types/GameRows";
import GameWinner from "../types/GameWinner";
import XOGameOptions from "../types/XOGameOptions";
import Computer from "./Computer";
import ComputerUI from "./ComputerUI";
import Friend from "./Friend";
import FriendUI from "./FriendUI";
import Player1 from "./Player1";
import Player1UI from "./Player1UI";
import XOGameUI from "./XOGameUI";

class XOGame {
  private _player1: Player1;
  private _computer: Computer;
  private _friend: Friend;
  private _rows: GameRows;
  private _enemy: GameEnemy;
  private _winner: GameWinner;
  private _gameResultMessage: GameResultMessage;
  private _isGameOver: boolean;
  private _playTurn: GamePlayTurn;
  private _xoGameUI: XOGameUI;
  private _player1UI: Player1UI;
  private _computerUI: ComputerUI;
  private _friendUI: FriendUI;
  private _developer: string;
  private _version: number;

  public constructor(options: XOGameOptions) {
    this._player1 = options.player1;
    this._computer = options.computer;
    this._friend = options.friend;
    this._rows = "not-selected";
    this._enemy = "not-selected";
    this._winner = "no-one";
    this._gameResultMessage = "Start playing to show!";
    this._isGameOver = false;
    this._playTurn = "you";
    this._xoGameUI = new XOGameUI(this);
    this._player1UI = new Player1UI(this);
    this._computerUI = new ComputerUI(this);
    this._friendUI = new FriendUI(this);
    this._developer = "Aissa Bedr";
    this._version = 1.45;
  }

  public updateRows(rows: GameRows): void {
    this._rows = rows;
  }

  public updateEnemy(enemy: GameEnemy): void {
    this._enemy = enemy;
  }

  public updateGameResultMessage(gameResultMessage: GameResultMessage): void {
    this._gameResultMessage = gameResultMessage;
  }

  public updateGameWinner(winner: GameWinner): void {
    this._winner = winner;
  }

  public updatePlayTurn(playTurn: GamePlayTurn): void {
    this._playTurn = playTurn;
  }

  public checkGameWinner(): void {
    switch (this._winner) {
      case "you":
        this.updateGameResultMessage("Game over and the winner is you!");

        this._xoGameUI.showGameResultMessage();

        this._player1.updateWinTimes(1);

        this._player1UI.handlePlayerWinTimes();
        break;

      case "computer":
        this.updateGameResultMessage(
          "Game over and the winner is the computer!"
        );

        this._xoGameUI.showGameResultMessage();

        this._computer.updateWinTimes(1);

        this._computerUI.handleComputerWinTimes();
        break;

      case "friend":
        this.updateGameResultMessage(
          "Game over and the winner is your friend!"
        );

        this._xoGameUI.showGameResultMessage();

        this._friend.updateWinTimes(1);

        this._friendUI.handleFriendWinTimes();
        break;

      default:
        this.updateGameResultMessage("Start playing to show!");

        this._xoGameUI.showGameResultMessage();
    }
  }

  public resetGame(): void {
    this._isGameOver = false;

    this._playTurn = "you";

    this._winner = "no-one";

    this._player1.updatePlayChoice("not-selected");

    this._xoGameUI.handleGamePlayChoice();

    this._xoGameUI.handleGamePlaySectionsHideClass();

    this._player1.makePlayedCanvasSquaresEmpty();

    if (this._enemy === "computer") {
      this._computer.updatePlayChoice("not-selected");

      this._computer.makePlayedCanvasSquaresEmpty();
    }

    if (this._enemy === "friend") {
      this._friend.updatePlayChoice("not-selected");

      this._friend.makePlayedCanvasSquaresEmpty();
    }

    this._xoGameUI.handleGameCanvasReset();

    this.updateGameResultMessage("Start playing to show!");

    this._xoGameUI.showGameResultMessage();
  }

  public gameOver(): void {
    this._isGameOver = true;

    this._xoGameUI.disableGameCanvasSquares();

    this.checkGameWinner();

    setTimeout(() => {
      this.resetGame();
    }, 1500);
  }

  public gameDrawInPVSF(): void {
    this._xoGameUI.disableGameCanvasSquares();

    this.updateGameResultMessage("Game over with draw!");

    this._xoGameUI.showGameResultMessage();

    setTimeout(() => {
      this.resetGame();
    }, 1500);
  }

  public get player1(): Player1 {
    return this._player1;
  }

  public get computer(): Computer {
    return this._computer;
  }

  public get friend(): Friend {
    return this._friend;
  }

  public get rows(): GameRows {
    return this._rows;
  }

  public get enemy(): GameEnemy {
    return this._enemy;
  }

  public get winner(): GameWinner {
    return this._winner;
  }

  public get gameResultMessage(): GameResultMessage {
    return this._gameResultMessage;
  }

  public get isGameOver(): boolean {
    return this._isGameOver;
  }

  public get playTurn(): GamePlayTurn {
    return this._playTurn;
  }

  public get developer(): string {
    return this._developer;
  }

  public get version(): number {
    return this._version;
  }
}

export default XOGame;
