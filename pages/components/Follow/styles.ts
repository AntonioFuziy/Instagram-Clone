import styled from "styled-components";

export const Container = styled.div`
  z-index: 4;
  width: 293px;
  height: 100vh;
  background-color: #fff;

  @media(max-width: 750px){
    display: none;
  }
`;
