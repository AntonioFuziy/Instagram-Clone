import React from 'react';
import { Container, ImageProfile, LeftContent, Profile, Username, Location, Options } from './styles';

const FeedProfile: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <ImageProfile src={"./img/perfil.JPG"}/>
        <Profile>
          <Username>antoniovffuziy</Username>
          <Location>Dourados</Location>
        </Profile>
      </LeftContent>
      <Options src={"./img/options.png"}/>
    </Container>
  )
}

export default FeedProfile;