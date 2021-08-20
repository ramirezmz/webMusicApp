import styled from "styled-components"

export const ContainerDetails = styled.div `
  margin: 20px 0;
  border-radius: 10px;
  `;

export const ImageContainer = styled(ContainerDetails) `
  width: 100%;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const TitleMusic = styled.h2 `
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 7px;
`;

export const TitleArtist = styled(TitleMusic)`
  font-size: 22px;
`;
