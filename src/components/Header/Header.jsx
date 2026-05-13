import React, { useContext } from 'react'

import { ThemeContext } from "../../contexts/ThemeContext"
import { HeaderWrapper } from "./Header";
import Logo from "../../assets/svgs/tictactoe-svgrepo-com.svg?react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useContext(ThemeContext);
  const mode = (theme==="light") ? true : false;
  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={()=> navigate("/")}/>
     {
        mode ? <CiLight onClick={toggleTheme} className='themeToggle'/>
        : <MdNightlight onClick={toggleTheme} className='themeToggle'/>
      }
    </HeaderWrapper>
  )
}

export default Header;
