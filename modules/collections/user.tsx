import Container from "../../components/container";
import useAuth from "../../hooks/useAuth";

const MyCollectionsUser = () => {
  const { session } = useAuth();

  return (
    <Container className="w-4/5 lg:w-2/3 mx-auto">
      <ul className="w-full flex items-center justify-between py-4 px-8 border rounded-xl">
        <li>
          <strong>Wallet</strong>
          <p>{session?.wallet}</p>
        </li>
        <li>
          <strong>Provider</strong>
          <p>{session?.type}</p>
        </li>
        <li>
          <strong>TOKEN ID:</strong>
          <p>{session?.token}</p>
        </li>
      </ul>
    </Container>
  );
};

export default MyCollectionsUser;
