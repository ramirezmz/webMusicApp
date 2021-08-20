import React from "react";
import Controls from "../../components/Controls";
import Details from "../../components/Details";
import { App } from "../../GlobalStyles";
import { 
  ContainerPlayer,
  Title,
  } from "./Player.elements";

const Player = ({ songs, currentSongIndex, setCurrentSongIndex, nextSongIndex }) => {


  return (
    <App>
      <ContainerPlayer>
        <Title>Playing Now</Title>
        <Details />
        {/* <Input></Input> */}
        {/* <SliderDuration>
          <SubTitle>{secToMin(currentTime)}</SubTitle>
          <SubTitle>{secToMin(duration)}</SubTitle>
        </SliderDuration> */}
        <Controls />
        {/* <Audio /> */}
        {/* <Paragraph>
          Next up:
        </Paragraph> */}
      </ContainerPlayer>
    </App>
  )
}

export default Player;