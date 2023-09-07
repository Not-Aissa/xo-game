type GameResultMessage =
  | "Start playing to show!"
  | "Playing..."
  | `Game over and the winner is ${"you" | "your friend" | "the computer"}!`
  | "Game over with draw!";

export default GameResultMessage;
