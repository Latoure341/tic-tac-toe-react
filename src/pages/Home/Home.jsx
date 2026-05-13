import React from 'react'
import { Title, Subtitle } from '../../styles/General.styled';
import { Container } from '../../styles/Home.styled';
import Button  from "../../components/Button/Button.jsx";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends, Higher score wins!</Subtitle>
      <Button onClick={()=>{navigate("/game-on")}}>Play Now</Button>
    </Container>


  )
}

export default Home
