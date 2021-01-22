import React from 'react';
import Post from '../Post/Post';

import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Post/>
      <Post/>
      <Post/>
    </Container>
  )
}

export default Feed;