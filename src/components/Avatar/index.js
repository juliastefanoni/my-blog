import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as STD from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return <STD.avatarWrapper fluid={avatarImage.childImageSharp.fluid} />
};

export default Avatar;