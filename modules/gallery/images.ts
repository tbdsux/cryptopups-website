export type GalleryImagesCategories = 'pupskins' | 'pupcards' | 'pupitems';
export type GalleryImagesRarities =
  | 'uncommon'
  | 'common'
  | 'mythic'
  | 'cosmic'
  | 'ethereal'
  | 'special';

export type GalleryImagesProps = {
  name: string;
  link: string;
  filename: string;
  rarity: GalleryImagesRarities | string;
  category: GalleryImagesCategories | string;
  owner?: string;
};
