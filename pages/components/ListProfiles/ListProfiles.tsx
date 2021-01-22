import React from 'react';
import ListItem from '../ListItem/ListItem';

import { Container, Fragment, Suggestions, SeeAll } from './styles';

const ListProfiles: React.FC = () => {
  return (
    <Container>
      <Fragment>
        <Suggestions>Suggestions For You</Suggestions>
        <SeeAll>See All</SeeAll>
      </Fragment>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
    </Container>
  );
}

export default ListProfiles;