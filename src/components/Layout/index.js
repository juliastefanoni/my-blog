import React from "react";
import PropTypes from "prop-types";

import Sidebar from '../Sidebar';

import * as STD from './styled';
import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <STD.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <STD.LayoutMain>{children}</STD.LayoutMain>
    </STD.LayoutWrapper>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
