import React, { useContext, useState } from 'react'
import { Subtitle, Title } from "../../../styles/General.styled.js";
import { ButtonBox } from "./RoundOverModal,styled.js"

const RoundOverModal = () => {

  return (
    <>
      <Title>Player 1 Wins the Round</Title>
      <Subtitle>We switching turns</Subtitle>
      <Subtitle>Player1: 1</Subtitle>
      <Subtitle>Player2: 0</Subtitle>

      <ButtonBox>
        <button>Continue</button>
        <button>Restart</button>
      </ButtonBox>
    </>
  )
}

export default RoundOverModal

