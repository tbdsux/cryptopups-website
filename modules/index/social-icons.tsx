import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const SocialLinks = [
  {
    name: "facebook",
    icon: faFacebook,
    link: "https://web.facebook.com/therealcryptopups",
  },
  {
    name: "twitter",
    icon: faTwitter,
    link: "https://twitter.com/apppllleee_pie",
  },
  {
    name: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/apppllleee_pie/",
  },
];

const SocialIcons = () => {
  return (
    <div>
      <p className="mb-4 text-gray-200 tracking-wider text-sm uppercase">
        Visit us at our social pages
      </p>

      <ul className="flex items-center justify-center">
        {SocialLinks.map((s) => (
          <li key={s.name}>
            <Link href={s.link}>
              <a
                className="text-3xl text-gray-200 mx-1 group"
                title={`Visit us at ${s.name}`}
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  className="transform group-hover:scale-110 duration-500"
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
