import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
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

  return (
    <CellStyle
      onClick={() => {
        cellHandler();
      }}
    >
      {cellItem}
    </CellStyle>
  );
};
