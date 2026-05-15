import React, { useContext } from 'react'
import { CellStyle } from "./GameCell.styled"
import { GameContext } from '../../contexts/GameContext'

export const GameCell = ({ cellItem, index}) => {
  const { updateBoard } = useContext(GameContext);

  return (
    <CellStyle onClick={()=> {
      updateBoard(index);
      }}>
      {cellItem}
    </CellStyle>
  )
}
