import { AWAPIResponseProps } from './responses';

export type ImagesResponseProps = AWAPIResponseProps<ImagesTemplateProps[]>;

export interface ImagesTemplateProps {
  contract: string;
  template_id: string;
  is_transferable: boolean;
  is_burnable: boolean;
  issued_supply: string;
  max_supply: string;
  collection: Collection;
  schema: Schema;
  immutable_data: ImmutableData;
  created_at_time: string;
  created_at_block: string;
  name: string;
}

export interface Collection {
  collection_name: string;
  name: string;
  img: string;
  author: string;
  allow_notify: boolean;
  authorized_accounts: string[];
  notify_accounts: any[];
  market_fee: number;
  created_at_block: string;
  created_at_time: string;
}

export interface ImmutableData {
  DPS: string;
  img: string;
  name: string;
  Power: string;
  League: string;
  Agility: string;
  BackImg: string;
  'Item Owner'?: string;
  Description: string;
  'Authenticity Card': string;
}

export interface Schema {
  schema_name: string;
  format: Format[];
  created_at_block: string;
  created_at_time: string;
}

export interface Format {
  name: string;
  type: string;
}
