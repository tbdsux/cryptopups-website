import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// social links of the website
const SocialLinks = [
  {
    name: "Facebook",
    icon: faFacebook,
    link: "https://web.facebook.com/therealcryptopups",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    link: "https://twitter.com/apppllleee_pie",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/apppllleee_pie/",
  },
];

const SocialIcons = () => {
  return (
    <div>
      <p className="mb-4 text-gray-200 tracking-wider text-sm uppercase">
        Follow us at our social pages to stay updated
      </p>

      <ul className="flex items-center justify-center">
        {SocialLinks.map((s) => (
          <li key={s.name}>
            <a
              className="text-3xl text-gray-200 mx-1 group"
              title={`Visit us at ${s.name}`}
              target="_blank"
              rel="noreferrer"
              href={s.link}
            >
              <FontAwesomeIcon
                icon={s.icon}
                className="transform group-hover:scale-110 duration-500"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
export { SocialLinks };
