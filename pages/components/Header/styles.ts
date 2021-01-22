import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 54px;
  background: #fff;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 103px;
  height: 29px;
`

export const SearchBar = styled.input`
  width: 200px;
  height: 15px;
  text-align: center;
  
  @media (max-width: 750px){
    display: none;
  }
`

export const Actions = styled.div`
  margin-top: 30px;
  width: 200px;
`