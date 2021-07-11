import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sanf-serif;
  }

  body {
    margin: 0;
    padding: 0;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      fon-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;