import React, { useContext } from "react";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../../Modal/Modal.styled.js";
import { Subtitle, Title } from "../../../styles/General.styled.js";
import  Button  from "../../Button/Button.jsx";
import { GameContext } from "../../../contexts/GameContext.jsx";
import { ModalContext } from "../../../contexts/ModalContext.jsx"

const RoundOverModal = () => {
  const {resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext)
  const isDraw = game.winner === "draw";

  return (
    <>
      <ModalHeader>
        <Title>{isDraw ? "Round Is A Draw" : `${game.winner?.name} Wins The Round`}</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>{isDraw ? "No score update" : "We switching turns"}</Subtitle>
        <Subtitle>{game.player1.name}: {game.player1.score}</Subtitle>
        <Subtitle>{game.player2.name}: {game.player2.score}</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button 
        onClick={()=>{
          handleModal();
          resetBoard();
        }}
        color="rgb(186, 142, 35)">
          Continue</Button>
        <Button onClick={()=> {
          resetBoard(true);
          handleModal();
        }}>Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
