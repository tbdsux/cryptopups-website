import { useState } from 'react';
import ContactForm from './contact-form';

const ContactManager = () => {
  const [sent, setSent] = useState(false);

  return (
    <div>
      {sent ? (
        <div>
          <p>Your message has been sent, thank you very much.!</p>
        </div>
      ) : (
        <ContactForm setSent={setSent} />
      )}
    </div>
  );
};

export default ContactManager;
