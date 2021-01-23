import React from 'react';

import { Container, LeftIcons, FavoriteIcon, LeftContent } from './styles';

const FeedActions: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <LeftIcons src={"./img/like.svg"}/>
        <LeftIcons src={"./img/comment.svg"}/>
        <LeftIcons src={"./img/send.svg"}/>
      </LeftContent>
      <FavoriteIcon src={"./img/bookmark.svg"}/>      
    </Container>
  );
}

export default FeedActions;