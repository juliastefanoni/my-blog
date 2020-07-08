import React from 'react';

import links from './content';

import * as STD from './styled';

const MenuLinks = () => (
  <STD.MenuLinksWrapper>
    <STD.MenuLinksList>
      {links.map( (link, index) => (
        <STD.MenuLinksItem key={index}>
          <STD.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </STD.MenuLinksLink>
        </STD.MenuLinksItem>
      ))}
    </STD.MenuLinksList>
  </STD.MenuLinksWrapper>
);

export default MenuLinks;