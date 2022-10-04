import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/components/Layout/Layout';
import GlobalStyle from '../src/globalStyles';
import theme from '../src/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
