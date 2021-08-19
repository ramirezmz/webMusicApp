import styled from "styled-components";
import { PlayCircle } from "@styled-icons/ionicons-outline/PlayCircle"

export const ContentControls = styled.div`
  width:70%;
  margin: 10px auto 25px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  display: grid;
  place-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const PlayButton = styled(PlayCircle) `
  color: #eee;
`;
