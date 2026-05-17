import React, { useContext, useState } from "react";
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
  const {resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext)
  return (
    <>
      <ModalHeader>
        <Title>Player 1 Wins the Round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>We switching turns</Subtitle>
        <Subtitle>Player1: 1</Subtitle>
        <Subtitle>Player2: 0</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button 
        onClick={()=>{
          handleModal();
          resetBoard();
        }}
        color="rgb(186, 142, 35)">
          Continue</Button>
        <Button>Restart</Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
