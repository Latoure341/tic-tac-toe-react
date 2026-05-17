import { createContext, useState } from "react";
import { checkDraw, checkWinner } from "../utils/Game.utils";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    player1: {
      choice: "o",
      name: "Eric",
      score: 0,
    },
    player2: {
      choice: "x",
      name: "La Toure",
      score: 0,
    },
    turn: "x",
    winner: "",
  });
  const updateBoard = (index) => {
    setGame((currentGame) => {
      if (
        currentGame.board[index] === "x" ||
        currentGame.board[index] === "o"
      ) {
        return currentGame;
      }

      const updatedBoard = [...currentGame.board];
      updatedBoard[index] = currentGame.turn;
      const winner = checkWinner(updatedBoard) ? currentGame.turn : null;
      const isDraw = !winner && checkDraw(updatedBoard);

      return {
        ...currentGame,
        board: updatedBoard,
        turn:
          winner || isDraw
            ? currentGame.turn
            : currentGame.turn === "x"
            ? "o"
            : "x",
        winner: isDraw ? "draw" : winner,
      };
    });
  };
  const resetBoard = () => {
    setGame({
      ...game,
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      turn: "x",
      winner: "",
    });
  };
  const toggleChoice = (choice) => (choice === "x" ? "o" : "x");
  const roundComplete = (isDraw = false) => {
    setGame((prevGame) => {
      const winningPlayer =
        prevGame.turn === prevGame.player1.choice ? "player1" : "player2";

      return {
        ...prevGame,
        player1: {
          ...prevGame.player1,
          choice: toggleChoice(prevGame.player1.choice),
          score:
            !isDraw && winningPlayer === "player1"
              ? prevGame.player1.score + 1
              : prevGame.player1.score,
        },
        player2: {
          ...prevGame.player2,
          choice: toggleChoice(prevGame.player2.choice),
          score:
            !isDraw && winningPlayer === "player2"
              ? prevGame.player2.score + 1
              : prevGame.player2.score,
        },
        turn: "x",
        winner: isDraw ? "draw" : prevGame[winningPlayer],
      };
    });
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        roundComplete,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
