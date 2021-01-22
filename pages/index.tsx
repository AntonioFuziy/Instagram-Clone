import Follow from "./components/Follow/Follow";
import Header from "./components/Header/Header";
import { Container, LeftContent } from "./styles";
import Stories from "./components/Stories/Stories";
import Feed from "./components/Feed/Feed";

export default function Home() {
  return (
    <>
      <Header/>
      <Container>
        <LeftContent>
          <Stories/>
          <Feed/>
        </LeftContent>
        <Follow/>
      </Container>
    </>
  )
}
