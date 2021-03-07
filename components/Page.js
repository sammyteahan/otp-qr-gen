import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --yellow: #fff200;
    --steel: #4b4b4b;
    --black: #393939;
    --white: #ededed;
    --maxWidth: 1000px;
    box-sizing: border-box;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: "Futura";
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f9f9f9' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  #__next {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
`;

function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}

export { Page as default };
