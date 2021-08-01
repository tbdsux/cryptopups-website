import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';
import ContactManager from './contact-manager';

const ContactPage = () => {
  return (
    <PageLayout
      title="Contact Us"
      description="Send us a message, feedback, comment or maybe some business matters"
    >
      {/* start seo */}
      <NextSeo title="Contact Us" description="Contact us and send us a message" />
      {/* end seo */}

      <Container className="w-5/6">
        <ContactManager />
      </Container>
    </PageLayout>
  );
};

export default ContactPage;
