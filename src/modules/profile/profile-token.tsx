import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import useGetToken from '../../hooks/useGetToken';
import TokenUseModal from './token-use/modal';

const ProfileToken = () => {
  const authData = useGetToken();

  const [copied, setCopied] = useState(false);

  const copyToken = () => {
    if (!authData) return;

    navigator.clipboard.writeText(authData.token);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);
  return (
    <span className="inline-flex items-center ml-2">
      {authData?.token}

      <button
        onClick={copyToken}
        title={copied ? 'Token has been copied' : 'Copy Token'}
        className="mx-1"
      >
        {copied ? (
          <CheckIcon aria-hidden="true" className="h-5 w-5" />
        ) : (
          <ClipboardIcon aria-hidden="true" className="h-5 w-5" />
        )}
      </button>

      <TokenUseModal />
    </span>
  );
};

export default ProfileToken;
