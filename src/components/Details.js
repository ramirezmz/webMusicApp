import React from "react";
import { 
  ContainerDetails,
  ImageContainer,
  Img,
  TitleArtist,
  TitleMusic
  } from "./Details.element";

const Details = ({ song }) => {
  return (
    <ContainerDetails>
      <ImageContainer>
        <Img src="../../public/logo512.png" alt=""/>
      </ImageContainer>
      <TitleMusic>As rosas não falam</TitleMusic>
      <TitleArtist>Cartola</TitleArtist>
    </ContainerDetails>
  )
}

export default Details;