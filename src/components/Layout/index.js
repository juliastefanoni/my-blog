import React from "react";
import PropTypes from "prop-types";

import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import * as STD from './styled';
import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <STD.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <STD.LayoutMain>{children}</STD.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </STD.LayoutWrapper>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
