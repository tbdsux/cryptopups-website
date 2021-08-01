import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

type ContactFormProps = {
  setSent: Dispatch<SetStateAction<boolean>>;
};
const ContactForm = ({ setSent }: ContactFormProps) => {
  const [error, setError] = useState<string | null>(null);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    console.log(e.currentTarget);
  };

  return (
    <form onSubmit={submitForm} className="w-full sm:w-4/5 xl:w-1/2 mx-auto">
      <div className="flex flex-col my-3">
        <label htmlFor="name" title="What is your name?">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          className="text-sm xs:text-base border-2 py-2 px-4 rounded-lg focus:border-warmGray-500 focus:outline-none"
          placeholder="What is your name?"
          required
        />
      </div>

      <div className="flex flex-col my-3">
        <label htmlFor="email" title="What is your email address? (we might contact you)">
          Your Email Address
        </label>
        <input
          type="email"
          name="email"
          className="text-sm xs:text-base border-2 py-2 px-4 rounded-lg focus:border-warmGray-500 focus:outline-none"
          placeholder="What is your email address? (we might contact you)"
          required
        />
      </div>

      <div className="flex flex-col my-3">
        <label htmlFor="message" title="What do you want to say to us?">
          Your Message
        </label>
        <textarea
          name="message"
          placeholder="What do you want to say to us?"
          className="text-sm xs:text-base border-2 py-2 px-4 rounded-lg focus:border-warmGray-500 focus:outline-none h-56"
          required
        ></textarea>
      </div>

      <div className="text-center my-3">
        <input
          className="py-2 px-20 rounded-lg bg-gray-700 hover:bg-gray-800 text-gray-100 cursor-pointer"
          type="submit"
          title="Send Message"
          value="Send Message"
        />
      </div>
    </form>
  );
};

export default ContactForm;
