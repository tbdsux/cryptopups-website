import Image from 'next/image';
import { ComingSoonImg } from '../lib/assets';
import BaseModal from './modal';

interface ComingSoonProps {
  open: boolean;
  closeModal: () => void;
}

const ComingSoonModal = ({ open, closeModal }: ComingSoonProps) => {
  return (
    <BaseModal open={open} closeModal={closeModal} className="max-w-4xl h-112 bg-white rounded-lg">
      <Image src={ComingSoonImg} layout="fill" objectFit="contain" alt="Coming Soon" />
    </BaseModal>
  );
};

export default ComingSoonModal;
