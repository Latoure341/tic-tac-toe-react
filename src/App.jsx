import Router from "./Router";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle } from "./styles/Global.styled.js";
import { lightTheme, darkTheme } from "./styles/theme.js";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext.jsx";
import { ModalContextProvider } from "./contexts/ModalContext.jsx";

function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyle />
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
