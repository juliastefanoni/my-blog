import React from 'react';

import getThemeColor from "../../utils/getThemeColor"
import links from './content';

import * as STD from './styled';

const MenuLinks = () => (
  <STD.MenuLinksWrapper>
    <STD.MenuLinksList>
      {links.map( (link, index) => (
        <STD.MenuLinksItem key={index}>
          <STD.MenuLinksLink 
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url} 
            activeClassName="active"
          >
            {link.label}
          </STD.MenuLinksLink>
        </STD.MenuLinksItem>
      ))}
    </STD.MenuLinksList>
  </STD.MenuLinksWrapper>
);

export default MenuLinks;