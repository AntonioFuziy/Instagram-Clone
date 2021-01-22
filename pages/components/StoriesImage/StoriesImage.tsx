import React from 'react';

import { Container, StoriesThumbnail, Username } from './styles';

const StoriesImage: React.FC = () => {
  return (
    <Container>
      <StoriesThumbnail src={"./img/perfil.JPG"}/>
      <Username>antoniovffuziy</Username>
    </Container>
  )
}

export default StoriesImage;