type PupMembersProps = {
  name: string;
  image: StaticImageData;
  info: string;
  links: {
    twitter: string;
  };
};

import apppllleee from '../../public/_profiles/apppllleee.png';
import gleetch from '../../public/_profiles/gleetch.png';
import theboringdude from '../../public/_profiles/theboringdude.png';
import touchmenot from '../../public/_profiles/touchmenot.png';

export const PupMembers: PupMembersProps[] = [
  {
    name: 'Apppllleee',
    info: 'Owner, Creator, Artist & Marketing Manager',
    image: apppllleee,
    links: {
      twitter: 'https://twitter.com/apppllleeenana'
    }
  },
  {
    name: 'Gleetch',
    info: 'Co-Creator & Artist',
    image: gleetch,
    links: {
      twitter: 'https://twitter.com/Gleetch5'
    }
  },
  {
    name: 'TouchMeNot',
    info: 'Communications Manager',
    image: touchmenot,
    links: {
      twitter: 'https://twitter.com/heartreaxxapp'
    }
  },
  {
    name: 'TheBoringDude',
    info: 'Developer',
    image: theboringdude,
    links: {
      twitter: 'https://twitter.com/joshabance'
    }
  }
];
