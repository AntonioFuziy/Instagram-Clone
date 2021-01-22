import React from 'react';

import { Container, Liked, Comments, MoreComments } from './styles';

const FeedData: React.FC = () => {
  return (
    <Container>
      <Liked>
        Liked by <strong>antoniovffuziy</strong> and 3000 others
      </Liked>
      <MoreComments>
        View All Comments
      </MoreComments>
      <Comments>
        <strong>antoniovffuziy</strong> Example of a comment
      </Comments>
      <Comments>
        <strong>antoniovffuziy</strong> Example of a comment
      </Comments>
      <Comments>
        <strong>antoniovffuziy</strong> Example of a comment
      </Comments>
      <Comments>
        <strong>antoniovffuziy</strong> Example of a comment
      </Comments>
    </Container>
  )
}

export default FeedData;