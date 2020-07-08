import React from 'react';
import propTypes from 'prop-types';

import * as STD from './styled';

const PostItem = ({
  slug,
  category, 
  background, 
  date, 
  timeToRead, 
  title, 
  description
}) => (
  <STD.PostItemLink to={slug}>
    <STD.PostItemWrapper>
      <STD.PostItemTag background={background}> {category} </STD.PostItemTag>
      <STD.PostItemInfo>
        <STD.PostItemDate> {date} - {timeToRead} min de leitura</STD.PostItemDate>
        <STD.PostItemTitle> {title} </STD.PostItemTitle>
        <STD.PostItemDescription> {description} </STD.PostItemDescription>
      </STD.PostItemInfo>
    </STD.PostItemWrapper>
  </STD.PostItemLink>
);

PostItem.propTypes = {
  slug: propTypes.string.isRequired,
  background: propTypes.string,
  category: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  timeToRead: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default PostItem;