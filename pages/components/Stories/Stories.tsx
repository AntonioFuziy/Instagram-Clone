import React from 'react';
import StoriesImage from '../StoriesImage/StoriesImage';

import { Container, Content } from './styles';

const Stories: React.FC = () => {
  return (
    <Container>
      <Content>
        <StoriesImage/>
        <StoriesImage/>
        <StoriesImage/>
        <StoriesImage/>
        <StoriesImage/>
        <StoriesImage/>
        <StoriesImage/>
        <StoriesImage/>
        <StoriesImage/>
      </Content>
    </Container>
  );
}

export default Stories;