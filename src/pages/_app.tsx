import WaxAuthProvider from '@cryptopuppie/next-waxauth';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import '../styles/globals.css';

const chainId = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';
const endpoint = 'https://wax.greymass.com';
const dApp = 'worldofcryptopups.cf';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WaxAuthProvider net={{ chainId, endpoint, dApp }}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </WaxAuthProvider>
  );
}
export default MyApp;
