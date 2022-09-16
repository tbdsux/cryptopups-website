export interface GetAccountCollectionProps {
  schemas: AccountCollectionSchemas[];
  templates: AccountCollectionTemplates[];
}

interface AccountCollectionSchemas {
  schema_name: string;
  assets: string;
}

interface AccountCollectionTemplates {
  template_id: string;
  assets: string;
}
