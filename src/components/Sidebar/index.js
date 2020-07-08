import React from 'react';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import * as STD from './styled';

const Sidebar = () => (
  <STD.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </STD.SidebarWrapper>
);

export default Sidebar;