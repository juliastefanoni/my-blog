import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import getThemeColor from "../../utils/getThemeColor"

import Avatar from '../Avatar';

import * as STD from './styled';

const Profile = () => {
  const { 
    site: { 
      siteMetadata : { author, position, description }
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          description
          position
          author
        }
      }
    }
  `);

  return (
    <STD.ProfileWrapper>
      <STD.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6} 
      >
        <Avatar />

        <STD.ProfileAuthor> 
          {author} 
          <STD.ProfilePosition> {position} </STD.ProfilePosition>
        </STD.ProfileAuthor>

      </STD.ProfileLink>

        <STD.ProfileDescription> {description} </STD.ProfileDescription>
    </STD.ProfileWrapper>
  );
}

export default Profile;