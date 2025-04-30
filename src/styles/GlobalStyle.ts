import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url('/fonts/PlayfairDisplay-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  /* Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    width: 100%;
    min-height: 100dvh;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    width: 100%;
    min-height: 100dvh;
    background-color: #f5f5f5;
    overflow-x: hidden;
  }

  #root {
    background-color: #fcfcfc;
    margin: 0 auto;
    min-height: 100dvh;
    
    width: 100%;
    max-width: 600px; // 큰 화면에서는 600px로 제한
    box-shadow: 0 0 10px rgba(75, 75, 75, 0.2);
  }

  @media (max-width: 600px) {
    #root {
        background-color: pink;
        box-shadow: none;
    }
  }
`;

export default GlobalStyle;
