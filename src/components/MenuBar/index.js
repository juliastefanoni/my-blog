import React, { useState, useEffect } from 'react';

import getThemeColor from "../../utils/getThemeColor";

import { Home } from '@styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search} from '@styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow} from '@styled-icons/boxicons-regular/UpArrowAlt';
import { LightBulb as Light} from '@styled-icons/entypo/LightBulb';
import { Grid } from '@styled-icons/boxicons-solid/Grid';
import { ThList as List } from '@styled-icons/typicons/ThList'

import * as STD from './styled';

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return(
    <STD.MenuBarWrapper>
      <STD.MenuBarGroup>
        <STD.MenuBarLink 
          to="/" 
          title="Voltar para home"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <STD.MenuBarItem>
            <Home />
          </STD.MenuBarItem>
        </STD.MenuBarLink>

        <STD.MenuBarLink 
          to="/search" 
          title="Pesquisar"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <STD.MenuBarItem>
            <Search />
          </STD.MenuBarItem>
        </STD.MenuBarLink>
      </STD.MenuBarGroup>

      <STD.MenuBarGroup>
        <STD.MenuBarItem 
          title="Mudar o tema" 
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Light />
        </STD.MenuBarItem>
        <STD.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </STD.MenuBarItem>
        <STD.MenuBarItem title="Ir para o topo">
          <Arrow />
        </STD.MenuBarItem>
      </STD.MenuBarGroup>
    </STD.MenuBarWrapper>
  );
};

export default MenuBar;