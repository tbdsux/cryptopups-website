import { createContext, ReactNode, useContext } from 'react';
import { ImagesTemplateProps } from '../../types/template';

interface GalleryContextProps {
  category?: string;
  rarity?: string;
  pupname?: string;
  set: {
    name: string;
    templates: string[];
  };
  images: ImagesTemplateProps[];
  showOwned: boolean;
}

const GalleryContext = createContext<GalleryContextProps>({
  set: {
    name: '',
    templates: []
  },
  images: [],
  showOwned: true
});

interface GalleryProviderProps {
  category?: string;
  rarity?: string;
  pupname?: string;
  set: {
    name: string;
    templates: string[];
  };
  images: ImagesTemplateProps[];
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
