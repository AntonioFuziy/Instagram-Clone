import React from 'react';

import { Container, Content, Logo, SearchBar } from './styles';

import Actions from '../../components/Actions/Actions';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={"./img/logo.png"}/>
      <SearchBar placeholder="Search"/>
      <Actions/>
    </Container>
  )
}

export default Header;