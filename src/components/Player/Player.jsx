import React from "react";
import { PlayerContainer, AvatarWraper } from "./Player.styled.js";
import Avatar, { genConfig } from "react-nice-avatar";
import { Text } from "../../styles/General.styled.js"

const Player = ({ player, isPlayerActive }) => {
  const config = genConfig();

  return (
    <PlayerContainer isPlayerActive={isPlayerActive ?? false}>
      <AvatarWraper>
        <Avatar style={{ width: "8rem", 
          height: "8rem",
          filter: isPlayerActive ? "" : "grayscale(100%)"
          }} {...config} />
      </AvatarWraper>
      
      <Text>
        {player.name} ({player.choice.toUpperCase()})
      </Text>
      <Text>{player.score}</Text>
    </PlayerContainer>
  );
};

export default Player;
