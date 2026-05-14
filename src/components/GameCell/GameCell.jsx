import React from 'react'
import { CellStyle } from "./GameCell.styled"

export const GameCell = ({cellItem}) => {
  return (
    <CellStyle>
      {cellItem}
    </CellStyle>
  )
}
