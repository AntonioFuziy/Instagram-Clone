import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  height: 100px;
  max-width: 616px;
  border: 1px solid #dbdbdb;

  @media(max-width: 750px){
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 10px 20px;
  overflow-y: hidden;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media(max-width: 750px){
    padding: 10px 0;
  }
`