import Computer from "./ts/helpers/classes/Computer";
import ComputerUI from "./ts/helpers/classes/ComputerUI";
import dom from "./ts/helpers/classes/Dom";
import Friend from "./ts/helpers/classes/Friend";
import FriendUI from "./ts/helpers/classes/FriendUI";
import Notifications from "./ts/helpers/classes/Notifications";
import NotificationsUI from "./ts/helpers/classes/NotificationsUI";
import Page from "./ts/helpers/classes/Page";
import PageUI from "./ts/helpers/classes/PageUI";
import Player1 from "./ts/helpers/classes/Player1";
import Player1UI from "./ts/helpers/classes/Player1UI";
import XOGame from "./ts/helpers/classes/XOGame";
import XOGameSettings from "./ts/helpers/classes/XOGameSettings";
import XOGameSettingsUI from "./ts/helpers/classes/XOGameSettingsUI";
import XOGameUI from "./ts/helpers/classes/XOGameUI";
import CanvasSquareType from "./ts/helpers/types/CanvasSquare";
import GameEnemy from "./ts/helpers/types/GameEnemy";
import GamePlayChoice from "./ts/helpers/types/GamePlayChoice";
import GameRows from "./ts/helpers/types/GameRows";
import GameTheme from "./ts/helpers/types/GameTheme";
import Button from "./ts/types/elements/Button";
import Div from "./ts/types/elements/Div";
import Select from "./ts/types/elements/Select";

const playGameBtn = dom.select<Button>("#play_game_btn");
const rowsChooseBtns = dom.selectAll<Button>(".rows-choose-btn");
const playerChooseBtns = dom.selectAll<Button>(".player-choose-btn");
const exitGameBtn = dom.select<Button>("#exit_game_btn");
const goSettingsBtn = dom.select<Button>("#go_settings_btn");
const backGameBtn = dom.select<Button>("#back_game_btn");
const gameChoices = dom.selectAll<Div>(".game-choice");
const canvasSquares = dom.selectAll<Div>(".canvas-square");
const resetGameBtn = dom.select<Button>("#reset_game_btn");
const themeSelect = dom.select<Select>("#theme_select");
const notificationsStateSelect = dom.select<Select>(
  "#notifications_state_select"
);
const resetWinTimesBtn = dom.select("#reset_win_times_btn");

const page = new Page();

const pageUI = new PageUI(page);

const xoGameSettings = new XOGameSettings();

const xoGameSettingsUI = new XOGameSettingsUI(xoGameSettings);

const notifications = new Notifications(xoGameSettings);

const notificationsUI = new NotificationsUI(notifications);

const player1 = new Player1();

const computer = new Computer();

const friend = new Friend();

const xoGame = new XOGame({ player1, computer, friend });

const player1UI = new Player1UI(xoGame);

const computerUI = new ComputerUI(xoGame);

const friendUI = new FriendUI(xoGame);

const xoGameUI = new XOGameUI(xoGame);

window.addEventListener("load", () => {
  pageUI.handlePageLocation();
  xoGameSettingsUI.handleGameTheme();
  xoGameSettingsUI.updateThemeSelect();
  xoGameSettingsUI.updateNotificationsSelect();
  xoGameUI.showGameResultMessage();
  xoGameUI.showGameDeveloper();
  xoGameUI.showGameVersion();
  player1UI.handlePlayerWinTimes();
});

playGameBtn.addEventListener("click", () => {
  page.updateLocation("choose-rows");

  pageUI.handlePageLocation();
});

rowsChooseBtns.forEach((rowsChooseBtn) => {
  rowsChooseBtn.addEventListener("click", () => {
    page.updateLocation("choose-player");

    pageUI.handlePageLocation();

    xoGame.updateRows(parseInt(rowsChooseBtn.dataset.rows!) as GameRows);

    xoGameUI.handlePlayCanvasSectionRows();

    xoGameUI.handleCanvasSquaresRows();
  });
});

playerChooseBtns.forEach((playerChooseBtn) => {
  playerChooseBtn.addEventListener("click", () => {
    if (playerChooseBtn.classList.contains("disable")) {
      if (xoGame.rows === 5) {
        notifications.send({
          content: "Current game version does'nt support this feature!",
          type: "error",
        });
      } else {
        notifications.send({
          content: "This feature is available only in the five rows type game!",
          type: "warning",
        });
      }

      notificationsUI.updateNotifications();

      return;
    }

    page.updateLocation("game");

    pageUI.handlePageLocation();

    xoGame.updateEnemy(playerChooseBtn.dataset.player as GameEnemy);

    xoGameUI.handleEnemy();

    if (xoGame.enemy === "computer") computerUI.handleComputerWinTimes();

    if (xoGame.enemy === "friend") friendUI.handleFriendWinTimes();

    notifications.send({
      content: "Welcome!",
      type: "normal",
    });

    notificationsUI.updateNotifications();
  });
});

gameChoices.forEach((gameChoice) => {
  gameChoice.addEventListener("click", () => {
    if (gameChoice.classList.contains("disable")) {
      notifications.send({
        content: "You already have choiced a game play type!",
        type: "error",
      });

      notificationsUI.updateNotifications();

      return;
    }

    if (gameChoice.classList.contains("active")) {
      notifications.send({
        content: "This is already your choice!",
        type: "normal",
      });

      notificationsUI.updateNotifications();

      return;
    }

    player1.updatePlayChoice(gameChoice.dataset.choice as GamePlayChoice);

    xoGameUI.handleGamePlayChoice();

    xoGameUI.handleGamePlaySectionsHideClass();

    if (xoGame.enemy === "computer")
      computer.updatePlayChoice(gameChoice.dataset.choice as GamePlayChoice);

    if (xoGame.enemy === "friend")
      friend.updatePlayChoice(gameChoice.dataset.choice as GamePlayChoice);

    xoGameUI.handleGameCanvasReset();
  });
});

canvasSquares.forEach((canvasSquare) => {
  canvasSquare.addEventListener("click", () => {
    if (
      canvasSquare.classList.contains("active") ||
      canvasSquare.classList.contains("disable")
    )
      return;

    if (xoGame.enemy === "friend") {
      if (xoGame.playTurn === "you") {
        canvasSquare.children[0].textContent = player1.playChoice;

        player1.play(canvasSquare.dataset.square as CanvasSquareType);

        xoGame.updateGameResultMessage("Playing...");

        player1UI.addPlayerCanvasSquareActiveClass(canvasSquare);

        xoGameUI.handlePlayerWin();

        xoGame.updatePlayTurn("friend");

        if (!xoGame.isGameOver) {
          notifications.send({
            content: "Your friend turn to play!",
            type: "normal",
          });

          notificationsUI.updateNotifications();
        }

        return;
      }

      canvasSquare.children[0].textContent = friend.playChoice;

      friend.play(canvasSquare.dataset.square as CanvasSquareType);

      friendUI.addPlayerCanvasSquareActiveClass(canvasSquare);

      xoGameUI.handleFriendWin();

      xoGame.updatePlayTurn("you");

      if (!xoGame.isGameOver) {
        notifications.send({
          content: "Your turn to play!",
          type: "normal",
        });

        notificationsUI.updateNotifications();
      }

      if (xoGame.winner === "no-one") {
        switch (xoGame.rows) {
          case 3:
            if (
              player1.playedCanvasSquares.length >= 5 ||
              friend.playedCanvasSquares.length >= 5
            )
              xoGame.gameDrawInPVSF();
            break;

          case 4:
            if (
              player1.playedCanvasSquares.length >= 6 &&
              friend.playedCanvasSquares.length >= 6
            )
              xoGame.gameDrawInPVSF();
            break;

          case 5:
            if (
              player1.playedCanvasSquares.length >= 8 ||
              friend.playedCanvasSquares.length >= 8
            )
              xoGame.gameDrawInPVSF();
            break;

          default:
            xoGame.updateGameResultMessage("Game over with draw!");
        }
      }

      console.log("You are playing with your friend!");

      return;
    }

    if (!xoGame.isGameOver) {
      canvasSquare.children[0].textContent = player1.playChoice;

      player1.play(canvasSquare.dataset.square as CanvasSquareType);

      xoGame.updateGameResultMessage("Playing...");

      xoGameUI.showGameResultMessage();

      player1UI.addPlayerCanvasSquareActiveClass(canvasSquare);

      player1UI.addCanvasSquaresHideClass();

      xoGameUI.handlePlayerWin();

      setTimeout(() => {
        computerUI.removeCanvasSquaresHideClass();

        const computerCanvasSquares = [...canvasSquares]
          .map((canvasSquare) => {
            if (
              canvasSquare.classList.contains("active") ||
              canvasSquare.classList.contains("disable") ||
              canvasSquare.classList.contains("hide")
            ) {
              return;
            }

            return canvasSquare;
          })
          .filter(
            (canvasSquare) => typeof canvasSquare !== "undefined"
          ) as Div[];

        if (computerCanvasSquares.length > 0) {
          const randomCanvasSquare =
            computerCanvasSquares[
              Math.floor(Math.random() * computerCanvasSquares.length)
            ];

          randomCanvasSquare.children[0].textContent = computer.playChoice;

          computer.play(randomCanvasSquare.dataset.square as CanvasSquareType);

          computerUI.addComputerCanvasSquareActiveClass(randomCanvasSquare);

          xoGameUI.handleComputerWin();

          return;
        }

        xoGameUI.disableGameCanvasSquares();

        xoGame.updateGameResultMessage("Game over with draw!");

        setTimeout(() => {
          xoGame.resetGame();
        }, 1500);
      }, 1500);
    }
  });
});

exitGameBtn.addEventListener("click", () => {
  page.updateLocation("home");

  pageUI.handlePageLocation();

  xoGame.resetGame();
});

goSettingsBtn.addEventListener("click", () => {
  page.updateLocation("settings");

  pageUI.handlePageLocation();
});

backGameBtn.addEventListener("click", () => {
  page.updateLocation("game");

  pageUI.handlePageLocation();
});

resetGameBtn.addEventListener("click", () => {
  xoGame.resetGame();

  notifications.send({
    content: "Game reseted successfully!",
    type: "success",
  });

  notificationsUI.updateNotifications();
});

themeSelect.addEventListener("change", (e: any) => {
  xoGameSettings.updateTheme(e.target.value as GameTheme);

  xoGameSettingsUI.handleGameTheme();

  notifications.send({
    content: `Theme saved successffully, current theme: ${xoGameSettings.theme}`,
    type: "success",
  });

  notificationsUI.updateNotifications();
});

resetWinTimesBtn.addEventListener("click", () => {
  player1.resetWinTimes();

  player1UI.handlePlayerWinTimes();

  if (xoGame.enemy === "computer") {
    computer.resetWinTimes();

    computerUI.handleComputerWinTimes();
  }

  if (xoGame.enemy === "friend") {
    friend.resetWinTimes();

    friendUI.handleFriendWinTimes();
  }

  notifications.send({
    content: "Players win times reseted successffully",
    type: "success",
  });

  notificationsUI.updateNotifications();
});

notificationsStateSelect.addEventListener("click", (e: any) => {
  xoGameSettings.updateNotificationsShowState(JSON.parse(e.target.value));
});
