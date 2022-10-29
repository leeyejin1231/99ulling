import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
    font-display: swap;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    @media all and (min-width:768px) { 
      width: 412px;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 
     }
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding:0;
  }
  #root>div{
    min-height: 100vh;
  }
`;

export default GlobalStyle;
