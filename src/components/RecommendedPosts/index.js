import React from 'react';
import propTypes from 'prop-types';

import getThemeColor from "../../utils/getThemeColor"

import * as STD from './styled';

const RecommendedPosts = ({ next, previous }) => (
  <STD.RecommendedWrapper>
    {previous && (
      <STD.RecommendedLink 
        to={previous.fields.slug}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6} 
        className="previous"
      >
        {previous.frontmatter.title}
      </STD.RecommendedLink>
    )}

    {next && (
      <STD.RecommendedLink 
        to={next.fields.slug} 
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        className="next"
      >
        {next.frontmatter.title}
      </STD.RecommendedLink>
    )}
  </STD.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;