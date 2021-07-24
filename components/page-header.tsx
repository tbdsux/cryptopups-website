import Container from '../components/container';
import Header from './header';

type PageHeaderProps = {
  title: string;
  description: string;
};
const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <>
      <Header />

      <Container className="w-11/12">
        <Container className="pt-32 md:pt-24 pb-16 w-11/12 text-center">
          <h3 className="text-warmGray-800 leading-loose text-5xl font-black tracking-wide">
            {title}
          </h3>

          <p className="text-lg tracking-wide text-gray-800">{description}</p>
        </Container>
        <hr />
      </Container>
    </>
  );
};

export default PageHeader;
