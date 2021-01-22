import React from 'react';

import { Container, Action, Profile } from './styles';

const Actions: React.FC = () => {
  return (
    <Container>
      <Action src={"./img/home.svg"}/>
      <Action src={"./img/send.svg"}/>
      <Action src={"./img/compass.svg"}/>
      <Action src={"./img/like.svg"}/>
      <Profile src={"./img/perfil.JPG"}/>
    </Container>
  )
}

export default Actions;