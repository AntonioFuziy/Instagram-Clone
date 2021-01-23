import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  
  @media(max-width: 750px){
    margin-top: 50px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  @media(max-width: 750px){
    width: 100%;
    align-items: center;
    margin-right: 0;
  }
` 
