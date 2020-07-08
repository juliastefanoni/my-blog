import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as STD from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return <STD.avatarWrapper fixed={avatarImage.childImageSharp.fixed} />
};

export default Avatar;