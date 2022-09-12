import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Container from '../../components/container';
import PageLayout from '../../layouts/page-layout';
import { PupMembers } from './members';

const ThePupSquadPage = () => {
  return (
    <PageLayout title="The Pup Squad" description="Our team consists of the following core members">
      {/* start seo */}
      <NextSeo
        title="The Pup Squad"
        description="Our team consists of the following core members"
      />
      {/* end seo */}

      <Container className="w-3/4 lg:w-5/6 2xl:w-3/4 3xl:w-3/5 4xl:w-1/2">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {PupMembers.map((member, index) => (
            <li key={index} className="bg-pastel-purple text-white shadow-2xl p-4 rounded-lg">
              <div className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  height="200"
                  width="200"
                  placeholder="blur"
                  className="rounded-full"
                />
              </div>
              <a
                href={member.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-warmGray-800 hover:underline"
              >
                <h4 className="leading-loose mt-2 text-xl font-extrabold tracking-wide text-center">
                  {member.name}
                </h4>
              </a>

              <p className="text-center tracking-wide">{member.info}</p>
            </li>
          ))}
        </ul>
      </Container>
    </PageLayout>
  );
};

export default ThePupSquadPage;
