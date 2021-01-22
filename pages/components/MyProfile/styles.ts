import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 84px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const MyProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`

export const Username = styled.h3`
  font-size: 14px;
`

export const Name = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #444;
`

export const FollowButton = styled.button`
  color: rgb(0,149,246);
  background: transparent;
  border: 0;
  height: 30px;
  font-weight: bold;
  font-size: 12px;
`