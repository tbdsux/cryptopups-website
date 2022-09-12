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
          <div className="inline-flex flex-col items-center justify-center mt-12">
            <h1 className="text-4xl lg:text-5xl text-pastel-purple font-alt font-bold uppercase tracking-wide leading-loose">
              {title}
            </h1>
            <div className="mt-0.5 py-0.5 rounded-full bg-pastel-purple w-3/5"></div>
          </div>

          <p className="text-lg tracking-wide mt-8">{description}</p>
        </Container>
        <hr />
      </Container>
    </>
  );
};

export default PageHeader;
