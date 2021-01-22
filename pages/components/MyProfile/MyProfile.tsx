import React from 'react';

import { Container, MyProfileImage, Description, Username, Name, FollowButton } from './styles';

const MyProfile: React.FC = () => {
  return (
   <Container>
     <MyProfileImage src={"./img/perfil.JPG"}/>
     <Description>
       <Username>antonioffuziy</Username>
       <Name>Antonio Fuziy</Name>
     </Description>
     <FollowButton>
       Switch
     </FollowButton>
   </Container> 
  )
}

export default MyProfile;