import { FormEvent, useRef, useState } from 'react';

const ContactForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputMessageRef = useRef<HTMLTextAreaElement>(null);
  const btnSubmitRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    const name = inputNameRef.current?.value;
    const email = inputEmailRef.current?.value;
    const message = inputMessageRef.current?.value;

    // check and validate values
    if (!name) {
      setError('Please enter your name so that we know who we are talking to.');
      return;
    }
    if (!email) {
      setError(
        'Please enter your email address so that we can contact you in the future if needed.'
      );
      return;
    }
    if (!message) {
      setError('What do you want to send? What can we do with a no message?');
      return;
    }

    // parse message
    const m = { name, email, message };

    // disable button
    if (btnSubmitRef.current) {
      btnSubmitRef.current.value = 'Sending message...';
      btnSubmitRef.current.disabled = true;
    }

    // send message to api
    fetch('https://www.phurma.ml/api/U_RNqask', {
      method: 'POST',
      body: JSON.stringify(m),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.description);
        } else {
          setError(null);
          setSuccess(true);
        }
      })
      .catch((e) => {
        console.error(e);
        setError('There was a problem while trying to send your message. Please try again later.');
      });
  };

  return (
    <div>
      {success ? (
        <div>
          <p className="text-center text-lg tracking-wide">
            Your message has been sent to us! Thank you very much!
          </p>
        </div>
      ) : (
        <div>
          <p className="mb-8 text-red-500 tracking-wide text-center underline">{error}</p>
          <form onSubmit={submitForm} className="w-full sm:w-4/5 xl:w-1/2 3xl:w-2/5 mx-auto">
            <div className="flex flex-col my-3">
              <label htmlFor="name" title="What is your name?">
                Your Name
              </label>
              <input
                ref={inputNameRef}
                type="text"
                name="name"
                className="text-sm xs:text-base border-2 py-2 px-4 rounded-lg focus:border-stone-500 focus:outline-none mt-1"
                placeholder="What is your name?"
                required
              />
            </div>

            <div className="flex flex-col my-3">
              <label htmlFor="email" title="What is your email address? (we might contact you)">
                Your Email Address
              </label>
              <input
                ref={inputEmailRef}
                type="email"
                name="email"
                className="text-sm xs:text-base border-2 py-2 px-4 rounded-lg focus:border-stone-500 focus:outline-none mt-1"
                placeholder="What is your email address? (we might contact you)"
                required
              />
            </div>

            <div className="flex flex-col my-3">
              <label htmlFor="message" title="What do you want to say to us?">
                Your Message
              </label>
              <textarea
                ref={inputMessageRef}
                name="message"
                placeholder="What do you want to say to us?"
                className="text-sm xs:text-base border-2 py-2 px-4 rounded-lg focus:border-stone-500 focus:outline-none h-56 mt-1"
                required
              ></textarea>
            </div>

            <div className="text-center my-3">
              <input
                ref={btnSubmitRef}
                className="py-2 px-20 rounded-lg bg-stone-700 hover:bg-stone-800 text-stone-100 cursor-pointer disabled:opacity-70"
                type="submit"
                title="Send Message"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
