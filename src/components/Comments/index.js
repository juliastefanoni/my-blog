import React from 'react';
import propTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as STD from './styled';

const Comments = ( { url, title }) => {
  const completeURL = `http//localhost:8000${url}`

  return (
    <STD.CommentsWrapper>
      <STD.CommentsTitle> Comentários </STD.CommentsTitle>
      <ReactDisqusComments
        shortname="jliastefanoni"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </STD.CommentsWrapper>
  );
}

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
}

export default Comments;