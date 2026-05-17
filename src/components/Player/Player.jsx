import React from 'react'
import { PlayerContainer } from "./Player.styled.js"

const Player = ({ player }) => {
  return (
    <PlayerContainer>
    <div>{player.name} ({player.choice})</div>
    <div>{player.score}</div>
    </PlayerContainer>
  )
}

export default Player