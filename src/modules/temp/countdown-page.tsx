import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { Background, Logo } from '../../lib/assets';

const CountdownPage: NextPage = () => {
  const [countdownDate, setCountdownDate] = useState('');

  useEffect(() => {
    setCountdownDate(process.env.NEXT_PUBLIC_COUNTDOWN_DATE ?? '');
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <Head>
        <title>World of Cryptopups - Update Countdown!</title>
      </Head>

      <div className="z-30 relative text-center">
        <Image
          src={Logo}
          height="125"
          width="525"
          alt="World of CryptoPups"
          className="object-contain"
        />

        <p className="mt-8 font-bold text-xl text-white">A new update awaits....</p>

        <Countdown
          date={new Date(countdownDate)}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <p>Countdown is over!</p>;
            }

            return (
              <div className="mt-12 font-alt text-4xl text-white uppercase font-bold">
                <p>
                  {days} days : {hours}h : {minutes}m : {seconds}s
                </p>
              </div>
            );
          }}
        />
      </div>

      <Image
        src={Background}
        alt="World of Cryptopups"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        className="w-full h-full inset-0 z-20"
      />
    </div>
  );
};

export default CountdownPage;
