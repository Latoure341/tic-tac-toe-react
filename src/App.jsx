import Router from './Router';
import { ThemeProvider } from "styled-components"
import './App.css'
import { GlobalStyle } from "./styles/Global.styled.js"
import { DarkTheme, LightTheme } from './styles/Theme.js';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext.jsx';

function App() {
  const { theme } = useContext(ThemeContext)
  const mode = (theme === "light" ? LightTheme : DarkTheme)

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>

  )
}

export default App
