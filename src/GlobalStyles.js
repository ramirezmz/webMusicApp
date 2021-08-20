import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export const Body = styled.body`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: orange;
`;

export const App = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
`;
export default GlobalStyle;