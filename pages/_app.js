import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/globals.css";
import "../styles/main.css";

const GlobalStyle = createGlobalStyle`
 body {
  padding: 0;
  margin: 0;
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-family: 'Rubik', sans-serif;
    color: var(--lightPurple);
    background: var(--dark);
    line-height: 150%;

  @media screen and (max-width: 600px) {
    padding: 0;
    padding-left: var(--spacingXS);
    padding-right: var(--spacingXS);  
  }
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
