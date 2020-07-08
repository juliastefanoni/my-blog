import React from 'react';

import { Home } from '@styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search} from '@styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow} from '@styled-icons/boxicons-regular/UpArrowAlt';
import { LightBulb as Light} from '@styled-icons/entypo/LightBulb';
import { Grid } from '@styled-icons/boxicons-solid/Grid';


import * as STD from './styled';

const MenuBar = () => (
  <STD.MenuBarWrapper>
    <STD.MenuBarGroup>
      <STD.MenuBarLink to="/" title="Voltar para home">
        <STD.MenuBarItem>
          <Home />
        </STD.MenuBarItem>
      </STD.MenuBarLink>

      <STD.MenuBarLink to="/search" title="Pesquisar">
        <STD.MenuBarItem>
          <Search />
        </STD.MenuBarItem>
      </STD.MenuBarLink>
    </STD.MenuBarGroup>

    <STD.MenuBarGroup>
      <STD.MenuBarItem title="Mudar o tema">
        <Light />
      </STD.MenuBarItem>
      <STD.MenuBarItem title="Mudar visualização">
        <Grid />
      </STD.MenuBarItem>
      <STD.MenuBarItem title="Ir para o topo">
        <Arrow />
      </STD.MenuBarItem>
    </STD.MenuBarGroup>
  </STD.MenuBarWrapper>
);

export default MenuBar;