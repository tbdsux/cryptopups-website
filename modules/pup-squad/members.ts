type PupMembersProps = {
  name: string;
  image: StaticImageData;
  info: string;
};

import apppllleee from '../../public/_profiles/apppllleee.png';
import gleetch from '../../public/_profiles/gleetch.png';
import theboringdude from '../../public/_profiles/theboringdude.png';
import touchmenot from '../../public/_profiles/touchmenot.png';

export const PupMembers: PupMembersProps[] = [
  {
    name: 'Apppllleee',
    info: 'Owner, Creator, Artist & Marketing Manager',
    image: apppllleee
  },
  {
    name: 'Gleetch',
    info: 'Co-Creator & Artist',
    image: gleetch
  },
  {
    name: 'TouchMeNot',
    info: 'Communications Manager',
    image: touchmenot
  },
  {
    name: 'TheBoringDude',
    info: 'Developer',
    image: theboringdude
  }
];
