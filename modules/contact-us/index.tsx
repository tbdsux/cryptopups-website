import { NextSeo } from 'next-seo';
import DefaultLayout from '../../layouts/default';

const ContactPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo title="Contact" description="Contact us and send us a message" />
      {/* end seo */}
      <div>START OF CONTACT PAGE</div>
    </DefaultLayout>
  );
};

export default ContactPage;
