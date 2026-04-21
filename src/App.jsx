import Router from './Router';
import { ThemeProvider } from "styled-components"
import './App.css'
import { GlobalStyle } from "./styles/Global.styled.js"
import { DarkTheme, LightTheme } from './styles/Theme.js';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContex.jsx';
function App() {

  const {theme, setTheme} = useContext(ThemeContext)
  const mode = (theme === "light" ? LightTheme : DarkTheme )

  return (
    <ThemeProvider theme={DarkTheme}>
    <GlobalStyle />
    <Router />
    </ThemeProvider>
  )
}

export default App
