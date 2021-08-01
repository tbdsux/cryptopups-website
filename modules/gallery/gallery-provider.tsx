import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { GalleryImagesCategories, GalleryImagesRarities } from './images';

type GalleryImagesProps = {
  rarity: string[];
  category: string[];
};

type GalleryReducerActions =
  | {
      type: 'addCategory';
      item: GalleryImagesCategories | string;
    }
  | { type: 'removeCategory'; item: GalleryImagesCategories | string }
  | { type: 'addRarity'; item: GalleryImagesRarities | string }
  | { type: 'removeRarity'; item: GalleryImagesRarities | string };

type GalleryContextProps = {
  state: GalleryImagesProps;
  dispatch: Dispatch<GalleryReducerActions>;
};

type GalleryProviderProps = {
  children: ReactNode;
};

const GContext = createContext<GalleryContextProps>({
  state: { rarity: [], category: [] },
  dispatch: () => {}
});

const GalleryReducer = (state: GalleryImagesProps, action: GalleryReducerActions) => {
  switch (action.type) {
    case 'addCategory':
      return {
        ...state,
        category: [...state.category, action.item]
      };
    case 'removeCategory':
      return {
        ...state,
        category: state.category.filter((i) => i !== action.item)
      };

    case 'addRarity':
      return {
        ...state,
        rarity: [...state.rarity, action.item]
      };
    case 'removeRarity':
      return {
        ...state,
        rarity: state.rarity.filter((i) => i !== action.item)
      };
  }
};

const GalleryProvider = ({ children }: GalleryProviderProps) => {
  const [state, dispatch] = useReducer(GalleryReducer, { rarity: [], category: [] });

  return <GContext.Provider value={{ state, dispatch }}>{children}</GContext.Provider>;
};

const useGallery = () => {
  const context = useContext(GContext);

  if (context === undefined) {
    throw new Error('Wrap the gallery with <GalleryProvider></GalleryProvider>');
  }

  return context;
};

export { useGallery };
export default GalleryProvider;
