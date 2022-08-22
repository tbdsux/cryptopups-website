import { ITemplate } from '@cryptopuppie/useatomicassets';
import { createContext, ReactNode, useContext } from 'react';
import { SetProps } from '../../types/sets';

interface GalleryContextProps {
  category?: string;
  rarity?: string;
  pupname?: string;
  set: SetProps;
  images: ITemplate[];
  showOwned: boolean;
}

const GalleryContext = createContext<GalleryContextProps>({
  set: {
    setid: -1,
    title: '',
    templates: [],
    reward: 0,
    amount: 0
  },
  images: [],
  showOwned: true
});

interface GalleryProviderProps {
  category?: string;
  rarity?: string;
  pupname?: string;
  set: SetProps;
  images: ITemplate[];
  showOwned: boolean;
  children: ReactNode;
}

const GalleryProvider = ({
  children,
  category,
  rarity,
  pupname,
  set,
  images,
  showOwned
}: GalleryProviderProps) => {
  return (
    <GalleryContext.Provider value={{ category, rarity, pupname, set, images, showOwned }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('<GalleryProvider></GalleryProvider>');
  }

  return context;
};

export default GalleryProvider;
