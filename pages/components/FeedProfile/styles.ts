import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 10px;
  border: 1px solid #dbdbdb;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 750px){
    width: 100%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ImageProfile = styled.img`
  border: 2px solid red;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 10px;
`

export const Profile = styled.div`
  line-height: 15px;
  margin-left: 10px;
`

export const Username = styled.p`
  font-size: 14px;
  font-weight: bold;
`

export const Location = styled.p`
  font-size: 12px;
  color: #777;
`

export const Options = styled.img`
  width: 12px;
  height: 3px;
`