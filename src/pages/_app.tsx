import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import AuthProvider from '../lib/auth-provider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
