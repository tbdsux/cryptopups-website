import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../../components/container';

// social links of the website
const SocialLinks = [
  {
    name: 'Facebook',
    icon: faFacebook,
    link: 'https://web.facebook.com/therealcryptopups',
    username: 'therealcryptopups',
    style: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/apppllleee_pie',
    username: 'apppllleee_pie',
    style: 'bg-lightBlue-500 hover:bg-lightBlue-600'
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/apppllleee_pie/',
    username: 'apppllleee_pie',
    style: 'bg-red-500 hover:bg-red-600'
  },
  {
    name: 'Discord',
    icon: faDiscord,
    link: 'https://discord.gg/ZKEezUwzaB'
  }
];

const SocialContainer = () => {
  return (
    <Container className="w-5/6 py-20">
      <div className="text-center">
        <h4 className="text-3xl md:text-4xl font-black tracking-wide text-warmGray-800 leading-relaxed mb-2">
          Follow us on Social Media
        </h4>
        <p className="lg:text-lg tracking-wide ">
          Receive faster updates, events, notifications and announcements in our social media pages
        </p>

        <ul className="flex justify-center flex-wrap mt-4">
          {SocialLinks.filter((s) => s.name !== 'Discord').map((s, index) => (
            <li key={index} className="m-1">
              <a
                href={s.link}
                rel="noreferrer"
                target="_blank"
                className={`text-sm md:text-base py-2 px-6 text-white rounded-lg inline-flex items-center ${s.style}`}
              >
                <FontAwesomeIcon icon={s.icon} className="text-xl" />
                <span className="tracking-wide ml-2">@{s.username}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <a
            href="https://discord.io/worldofcryptopups"
            target="_blank"
            rel="noreferrer"
            className="text-sm md:text-base inline-flex items-center bg-neutral-700 hover:bg-neutral-800 duration-300 text-neutral-100 py-2 lg:py-3 px-8 rounded-full"
            title="Join the amazing community on Discord"
          >
            <FontAwesomeIcon className="text-2xl mr-2" icon={faDiscord} />
            Join the Community
          </a>
        </div>
      </div>
    </Container>
  );
};

export { SocialLinks, SocialContainer };
