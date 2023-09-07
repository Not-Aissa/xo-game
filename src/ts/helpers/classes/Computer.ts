import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import CanvasSquareType from "../types/CanvasSquare";
import GamePlayChoice from "../types/GamePlayChoice";

class Computer {
  private _playChoice: GamePlayChoice;
  private _playedCanvasSquares: Array<CanvasSquareType>;
  private _winTimes: number;

  public constructor() {
    this._playChoice = "not-selected";
    this._playedCanvasSquares = new Array();
    this._winTimes = storageGet("computerWinTimes", true) || 0;
  }

  public updatePlayChoice(playChoice: GamePlayChoice): void {
    switch (playChoice) {
      case "not-selected":
        this._playChoice = "not-selected";
        break;

      case "x":
        this._playChoice = "o";
        break;

      case "o":
        this._playChoice = "x";
        break;

      default:
        this._playChoice = "not-selected";
    }
  }

  public play(canvasSquare: CanvasSquareType): void {
    this._playedCanvasSquares.push(canvasSquare);
  }

  public makePlayedCanvasSquaresEmpty(): void {
    this._playedCanvasSquares = [];
  }

  public updateWinTimes(value: number): void {
    this._winTimes += value;

    storageSet("computerWinTimes", this._winTimes);
  }

  public resetWinTimes(): void {
    this._winTimes = 0;

    storageSet("computerWinTimes", this._winTimes);
  }

  public get playChoice(): GamePlayChoice {
    return this._playChoice;
  }

  public get playedCanvasSquares(): Array<CanvasSquareType> {
    return this._playedCanvasSquares;
  }

  public get winTimes(): number {
    return this._winTimes;
  }
}

export default Computer;
