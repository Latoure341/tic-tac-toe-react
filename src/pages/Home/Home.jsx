import React from 'react'
import Header from './Header';
import { Title } from '../../styles/General.styled';
import { Container } from '../../styles/Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Header />
    </Container>


  )
}

export default Home
