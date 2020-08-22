import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import Hit from './Hit';

import * as STD from './styled';

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

const Search = () => (
  <STD.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autoFocus translations={{ placeholder: "Pesquisar..."}}/>
      <Stats translations={{stats(nbHits, timeSpenMs) {
        return `${nbHits} resultados encontrados em ${timeSpenMs}ms`
      }}}/>
      <Hits hitComponent={Hit}/>
    </InstantSearch>
  </STD.SearchWrapper>
);

export default Search;