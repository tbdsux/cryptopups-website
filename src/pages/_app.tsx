import WaxAuthProvider from '@cryptopuppie/next-waxauth';
import { UseAtomicAssetsProvider } from '@cryptopuppie/useatomicassets';
import { UseEOSProvider } from '@cryptopuppie/useeoschain';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEO from '../../next-seo.config';
import { atomicassets, chainId, dApp, endpoint } from '../lib/config';
import '../styles/fonts.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#fff" />

      <WaxAuthProvider net={{ chainId, endpoint, dApp }}>
        <UseEOSProvider endpoint={endpoint}>
          <UseAtomicAssetsProvider endpoint={atomicassets}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </UseAtomicAssetsProvider>
        </UseEOSProvider>
      </WaxAuthProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme="colored"
        className="text-sm"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
export default MyApp;
