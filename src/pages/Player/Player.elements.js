import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const Body = styled(Container) `
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #eee;
`;

export const App = styled(Body) `
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
`;

export const ContentPlayer = styled.div `
  max-width: 320px;
  width: 90vw;
  margin: auto;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  color: rgba(255, 255, 255, 0.9);
  padding: 30px 35px;
  border-radius: 25px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 7px;
  color: #f4f4f4;
`;