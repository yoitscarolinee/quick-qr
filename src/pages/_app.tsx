import '@/styles/globals.css'
import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: 'Poppins', sans-serif;
    --main: 82, 170, 94;
    --black: 20, 17, 21;
    --white: 250, 253, 246;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --border-radius: 5px;
  }

  body {
    font-family: var(--font-family);
    color: rgba(var(--white), 1);
    background-color: rgba(var(--black), 1);
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
