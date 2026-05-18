import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../contexts/GameContext.jsx'
import { TimerContainer } from "./Timer.styled.js"

const TURN_SECONDS = 10;

const Timer = () => {
  const { game, switchTurn } = useContext(GameContext);
  const [timeLeft, setTimeLeft] = useState(TURN_SECONDS);

  useEffect(() => {
    if (game.winner) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime <= 1) {
          switchTurn();
          return TURN_SECONDS;
        }

        return currentTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [game.winner, switchTurn]);

  return (
    <TimerContainer>Timer: {timeLeft}s</TimerContainer>
  )
}

export default Timer
