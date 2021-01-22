import React from 'react';
import MyProfile from '../MyProfile/MyProfile';
import ListProfiles from '../ListProfiles/ListProfiles';

import { Container } from './styles';

const Follow: React.FC = () => {
  return (
    <Container>
      <MyProfile/>
      <ListProfiles/>
    </Container>
  )
}

export default Follow;