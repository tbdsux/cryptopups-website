import { GetServerSideProps } from 'next';
import { endpoint } from '../lib/config';
import GalleryPage from '../modules/gallery';

export const getServerSideProps: GetServerSideProps = async () => {
  const r = await fetch(endpoint + '/v1/chain/get_table_rows', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: 'wocgalleryrw',
      scope: 'wocgalleryrw',
      table: 'sets'
    })
  });
  const data = await r.json();

  return {
    props: {
      data: data
    }
  };
};

export default GalleryPage;
