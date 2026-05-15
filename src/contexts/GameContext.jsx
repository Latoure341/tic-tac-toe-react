import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props)=>{
    const [ game, setGame ] = useState({
        board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
        player1: {
            choice: "o",
            name: "player1"
        },
        player2: {
            choice: "x",
            name: "player2"
        },
        turn: "x"
    })

    const updateBoard = (index) => {
        setGame((currentGame) => {
            const updatedBoard = [...currentGame.board];
            updatedBoard[index] = game.turn;

            return {
                ...currentGame,
                board: updatedBoard, 
                turn: game.turn === "x" ? "o" : "x"
            };
        });
    }

    return (
        <GameContext.Provider value={{
            game, updateBoard
        }}>
            {props.children}
        </GameContext.Provider>
    )
}
