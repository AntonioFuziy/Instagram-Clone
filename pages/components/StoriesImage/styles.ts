import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const StoriesThumbnail = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  margin: 0 7px;
  border: 2px solid red;
  @media(max-width: 750px){
    width: 56px;
    height: 56px;
  }
`

export const Username = styled.p`
  font-size: 10px;
  color: #000;
`