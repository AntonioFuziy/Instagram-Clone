import React from 'react';
import FeedActions from '../FeedActions/FeedActions';
import FeedData from '../FeedData/FeedData';
import FeedProfile from '../FeedProfile/FeedProfile';
import PostImage from '../PostImage/PostImage';

import { Container } from './styles';

const Post: React.FC = () => {
  return (
    <Container>
      <FeedProfile/>
      <PostImage/>
      <FeedActions/>
      <FeedData/>
    </Container>

  )
}

export default Post;