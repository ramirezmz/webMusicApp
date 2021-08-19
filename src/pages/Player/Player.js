import React from "react";
import Controls from "../../components/Controls";
import { 
  Body, 
  Container,
  App,
  Title, 
  ContentPlayer} from "./Player.elements";

const Player = () => {

  return (
    <Container>
      <Body>
        <App>
          <ContentPlayer>
            <Title>Playing Now</Title>
            <Controls />
          </ContentPlayer>
        </App>
      </Body>
    </Container>
  )
}

export default Player;