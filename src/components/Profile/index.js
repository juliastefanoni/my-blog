import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
      <STD.ProfileLink>
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