import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { atomichubMarketplace, discord, neftyblocks, twitter } from '../../lib/links';
import FaqsBlendingGuide from './faqs/blending-guide';

const Faqs = () => {
  return (
    <div className="py-32 w-5/6 2xl:w-4/5 3xl:w-2/3 mx-auto text-center">
      <div className="inline-flex flex-col items-center justify-center">
        <h2 className="font-alt font-bold text-4xl tracking-wide text-pastel-orange uppercase">
          Faqs
        </h2>
        <div className="mt-0.5 py-0.5 rounded-full bg-pastel-orange w-3/5"></div>
      </div>

      <p className="text-lg mt-8">
        Its all that <strong>you need</strong>, pupper
      </p>

      <div className="mt-12 font-medium md:w-4/5 mx-auto text-left">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold flex w-full justify-between border-b-2 border-pastel-orange px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-pastel-orange-500 focus-visible:ring-opacity-75 my-3">
                <span>I don&apos;t have a linked pup role, help!</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-pastel-orange`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-2">
                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">
                    What is a linked pup?
                  </strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      To make puptown a safe place for pups, we created the linked pup role! The
                      linked pup role links your WAX or Anchor wallet to our pupdatabase. Don&apos;t
                      worry, pup, we do not store your personal info on the pupdatabase, we just
                      make sure you are an actual pup and not a bot!
                    </p>
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">
                    Why do we need this?
                  </strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      Linked pups are secured pups! When you link your account to our service, you
                      are automatically verified in our discord server. That&apos;s not all, you are
                      also whitelisted for for all pup related drops in puptown! Being a linked pup,
                      you have more access to server channels, giveaways, rewards and more!
                      Remember, linked pups are secured pup!
                    </p>
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">
                    How can I link my account?
                  </strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      Linking your account is easy, just follow this tutorial provided by our Admins
                      in puptown!!
                    </p>
                    <br />

                    <a
                      href="https://gateway.pinata.cloud/ipfs/QmXdemg433ALpu9qhBiMzqRnf1y63oV1JjLr1pf9Q3RW8v"
                      target="_blank"
                      rel="noreferrer"
                      className="italic text-pastel-orange underline opacity-80 hover:opacity-100"
                    >
                      click here for tutorial
                    </a>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold flex w-full justify-between border-b-2 border-pastel-orange px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-pastel-orange-500 focus-visible:ring-opacity-75 my-3">
                <span>I own World of Cryptopups collectible cards, now what?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-pastel-orange`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-2">
                <div className="my-6">
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      Our digital collectibles are built to last! With each new release, recent
                      cards just increase in value! There is no limit for the World of Cryptopups
                      digital collectibles. Here are some exciting stuff you can do with our cards
                      too :
                    </p>
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">Blending</strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      You don&apos;t just stare at digital collectibles, right? You Increase their
                      value! You can blend lower rarities into higher rarities to increase their
                      value and DPS!
                    </p>
                    <br />

                    <FaqsBlendingGuide />
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">
                    Upgrades and Swaps
                  </strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      The newest feature being added to our digital collectibles! We are improving
                      our collectible economy by allowing old cards to be repurposed (swapped &
                      upgraded) into new or existing cards, isn&apos;t that fantastic? Want to know
                      more?
                    </p>
                    <br />

                    <a className="italic text-pastel-orange underline opacity-80 hover:opacity-100">
                      click here for upgrade and swap guide
                    </a>
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">
                    Completion rewards
                  </strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      Collect more and earn more! We&apos;ve introduced the newest set collection
                      reward system in our latest update, and everyone gets more rewards than ever!
                      Receive limited edition collectibles, reward tokens, unique stickers, and more
                      for completing card sets!
                    </p>
                    <br />

                    <a className="italic text-pastel-orange underline opacity-80 hover:opacity-100">
                      checkout set rewards here
                    </a>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="font-bold flex w-full justify-between border-b-2 border-pastel-orange px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-pastel-orange-500 focus-visible:ring-opacity-75 my-3">
                <span>I need more info, where can I find it?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-pastel-orange`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-2">
                <div className="my-6">
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      Everything you need has been placed here in our website for your convenience,
                      but if you need more info on some other stuff {"here's"} where to get them:
                    </p>
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">
                    Drop info and announcements
                  </strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      Drops do not have any specific dates as of now. To follow along with the
                      latest info on drops make sure you join our{' '}
                      <a
                        className="italic font-bold underline text-pastel-orange"
                        target="_blank"
                        rel="noreferrer"
                        href={discord}
                      >
                        discord server
                      </a>{' '}
                      and{' '}
                      <a
                        className="italic font-bold underline text-pastel-orange"
                        target="_blank"
                        rel="noreferrer"
                        href={twitter}
                      >
                        twitter page
                      </a>
                      . All updates about changes, drops, giveaways and more are made available for
                      everyone!
                    </p>
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">Purchasing info</strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      All transactions are crypto-basis ($WAX, $NEFTY) only. No credit cards or
                      other form of payments are available. Drop purchases are available on our{' '}
                      <a
                        className="italic font-bold underline text-pastel-orange"
                        target="_blank"
                        rel="noreferrer"
                        href={neftyblocks}
                      >
                        neftyblocks page
                      </a>
                      . You can also purchase sold out digital collectibles from our drops in our{' '}
                      <a
                        className="italic font-bold underline text-pastel-orange"
                        target="_blank"
                        rel="noreferrer"
                        href={atomichubMarketplace}
                      >
                        atomichub marketplace
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div className="my-6">
                  <strong className="font-bold text-pastel-orange italic">
                    Technical Difficulties
                  </strong>
                  <div className="mt-4 ml-6 md:ml-8 lg:ml-12">
                    <p>
                      We sometimes experience some unexpected turn of events here at puptown. If you
                      are experiencing something odd or is affecting your overall experience with
                      us, please react out to the puppy team on{' '}
                      <a
                        className="italic font-bold underline text-pastel-orange"
                        target="_blank"
                        rel="noreferrer"
                        href={discord}
                      >
                        discord
                      </a>
                      .
                    </p>
                    <br />

                    <Link href="/pup-squad">
                      <a className="italic text-pastel-orange underline opacity-80 hover:opacity-100">
                        click here for more info on the puppy team
                      </a>
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Faqs;
