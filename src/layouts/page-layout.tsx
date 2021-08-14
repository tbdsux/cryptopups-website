import { ReactNode } from 'react';
import PageHeader from '../components/page-header';
import DefaultLayout from './default';

type PageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};
const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <DefaultLayout>
      <PageHeader title={title} description={description} />

      <div className="mt-12 mb-24">{children}</div>
    </DefaultLayout>
  );
};

export default PageLayout;
