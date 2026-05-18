import React, { useContext } from "react";
import { CellStyle, ElementXO } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkDraw, checkWinner } from "../../utils/Game.utils";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modals/RoundOverModal/RoundOverModal";

export const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const cellHandler = () => {
    if (cellItem === "x" || cellItem === "o") {
      return;
    }

    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;
    const hasWinner = checkWinner(updatedBoard);
    const isDraw = !hasWinner && checkDraw(updatedBoard);

    updateBoard(index);

    if (hasWinner || isDraw) {
      roundComplete(isDraw);
      handleModal(<RoundOverModal />);
    }
  };
  if(cellItem === "x") {
    return <CellStyle onClick={() => cellHandler()}><ElementXO>X</ElementXO></CellStyle>
  } else if(cellItem === "o") {
    return <CellStyle onClick={() => cellHandler()}><ElementXO>O</ElementXO></CellStyle>
  }

  return (
    <CellStyle
      onClick={() => {
        cellHandler();
      }}
    >
      {" "}
    </CellStyle>
  );
};
