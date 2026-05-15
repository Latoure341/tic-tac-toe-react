import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";

export const GameCell = ({ cellItem, index }) => {
  const { updateBoard } = useContext(GameContext);

  const cellHandler = () => {
    updateBoard(index);
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
