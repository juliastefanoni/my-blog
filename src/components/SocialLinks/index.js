import React from 'react';

import Icons from './Icons';
import links from './content';

import * as STD from './styled';

const SocialLinks = () => (
  <STD.SocialLinksWrapper>
    <STD.SocialLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label];

        return (
          <STD.SocialLinksItem key={index}>
            <STD.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
              <STD.IconWrapper>
                <Icon />
              </STD.IconWrapper>
            </STD.SocialLinksLink>
          </STD.SocialLinksItem>
        );
      })}
    </STD.SocialLinksList>
  </STD.SocialLinksWrapper>
);

export default SocialLinks;