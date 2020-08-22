import React from 'react';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Search from '../components/Search';

const SearchPage = () => (
  <Layout>
    <SEO 
      title="Search"
      description="Busque por posts, fique a vontade!"
    />
      <Search />
  </Layout>
);

export default SearchPage;