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
          <strong className="inline-flex items-center">
            TOKEN ID
            <span
              title="This Token will be used in registering for the future bot. Please do not share this token with anyone."
              className="ml-1 text-neutral-700 hover:text-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            :
          </strong>
          <p>{session?.token}</p>
        </li>
      </ul>
    </Container>
  );
};

export default MyCollectionsUser;
