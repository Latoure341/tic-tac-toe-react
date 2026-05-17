import { createContext, useEffect, useState } from "react";
import { checkWinner } from "../utils/Game.utils";

export const GameContext = createContext({});

export const GameContextProvider = (props)=>{
    const [ game, setGame ] = useState({
        board: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
        player1: {
            choice: "o",
            name: "player1", 
            score: 0
        },
        player2: {
            choice: "x",
            name: "player2", 
            score: 0
        },
        turn: "x",
        winner: null
    })

    const updateBoard = (index) => {
        setGame((currentGame) => {
            if (currentGame.board[index] === "x" || currentGame.board[index] === "o") {
                return currentGame;
            }

            const updatedBoard = [...currentGame.board];
            updatedBoard[index] = currentGame.turn;
            const winner = checkWinner(updatedBoard) ? currentGame.turn : null;

            return {
                ...currentGame,
                board: updatedBoard, 
                turn: winner ? currentGame.turn : currentGame.turn === "x" ? "o" : "x",
                winner
            };
        });
    }
    const resetBoard = () => {
        setGame({
            ...game, board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        })
    }

    useEffect(() => {
        if (game.winner) {
            console.log("We have a winner");
        }
    }, [game.winner]);

    return (
        <GameContext.Provider value={{
            game, updateBoard, resetBoard
        }}>
            {props.children}
        </GameContext.Provider>
    )
}
