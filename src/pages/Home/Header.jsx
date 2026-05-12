import React, { useContext } from 'react'
import {ThemeContext } from "../../contexts/ThemeContext"
import { Container } from '../../styles/Home.styled';

const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Container>
  )
}

export default Header
