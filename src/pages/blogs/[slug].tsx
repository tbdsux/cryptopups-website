import { GetServerSideProps } from 'next';
import { appUrl } from '../../lib/config';
import PostPage from '../../modules/blogs/post-page';
import { PostProps } from '../../modules/blogs/posts';
import { InternalAPIResponseProps } from '../../types/responses';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;

  const r = await fetch(appUrl + `/api/blogs/${slug}`);
  const data: InternalAPIResponseProps<PostProps> = await r.json();

  if (!r.ok) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post: data.data
    }
  };
};

export default PostPage;
