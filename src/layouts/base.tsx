import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import { ReactNode } from 'react';
import UpdateFormModal from '../modules/temp/update-form-modal';

type BaseLayoutProps = {
  children: ReactNode;
};

// ISSUE: https://github.com/FortAwesome/react-fontawesome/issues/412
config.autoAddCss = false;

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <UpdateFormModal />

      <Head>
        <style>{dom.css()}</style>
      </Head>

      {/* children */}
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
