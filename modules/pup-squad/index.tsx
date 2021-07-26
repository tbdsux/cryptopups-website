import { NextSeo } from 'next-seo';
import Container from '../../components/container';
import PageHeader from '../../components/page-header';
import DefaultLayout from '../../layout/default';
import { PupMembers } from './members';

const ThePupSquadPage = () => {
  return (
    <DefaultLayout>
      {/* start seo */}
      <NextSeo
        title="The Pup Squad"
        description="Our team consists of the following core members"
      />
      {/* end seo */}

      <PageHeader
        title="The Pup Squad"
        description="Our team consists of the following core members"
      />

      <Container className="w-3/4 lg:w-5/6 my-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {PupMembers.map((member, index) => (
            <li key={index} className="border shadow-xl p-2 rounded-lg">
              <div className="h-48 w-48 mx-auto bg-gray-200 rounded-lg"></div>
              <h4 className="leading-loose mt-2 text-xl font-extrabold tracking-wide text-warmGray-800 text-center">
                {member.name}
              </h4>

              <p className="text-center">{member.info}</p>
            </li>
          ))}
        </ul>
      </Container>
    </DefaultLayout>
  );
};

export default ThePupSquadPage;
