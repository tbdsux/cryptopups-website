import { NextSeo } from 'next-seo';
import PageLayout from '../../layouts/page-layout';

const ContactPage = () => {
  return (
    <PageLayout
      title="Contact Us"
      description="Send us a message, feedback, comment or maybe some business matters"
    >
      {/* start seo */}
      <NextSeo title="Contact Us" description="Contact us and send us a message" />
      {/* end seo */}
    </PageLayout>
  );
};

export default ContactPage;
