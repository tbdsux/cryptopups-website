import Container from '../../components/container';
import useAuth from '../../hooks/useAuth';

const MyCollectionsUser = () => {
  const { session } = useAuth();

  return (
    <Container className="w-4/5 lg:w-2/3 mx-auto">
      <ul className="w-full flex flex-col sm:flex-row text-center sm:text-left items-center justify-between py-4 px-8 border rounded-xl">
        <li className="my-1 sm:my-0">
          <strong>Wallet</strong>
          <p>{session?.wallet}</p>
        </li>
        <li className="my-1 sm:my-0">
          <strong>Provider</strong>
          <p>{session?.type}</p>
        </li>
        <li className="my-1 sm:my-0">
          <strong>TOKEN ID:</strong>
          <p>{session?.token}</p>
        </li>
      </ul>
    </Container>
  );
};

export default MyCollectionsUser;
