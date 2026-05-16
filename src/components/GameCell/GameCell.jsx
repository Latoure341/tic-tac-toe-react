import React, { useContext, useState } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkWinner } from "../../utils/Game.utils";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modals/RoundOverModal/RoundOverModal";

export const GameCell = ({ cellItem, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const [ openModal, setOpenModal ] = useState(false);

  const cellHandler = () => {
    updateBoard(index);
    if(checkWinner(game.board)){
     handleModal(<RoundOverModal/>)
      
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
