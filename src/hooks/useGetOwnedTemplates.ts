import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { useAtomicGetter } from '@cryptopuppie/useatomicassets';

interface useGetOwnerTemplatesResponseProps {
  schemas: {
    schema_name: string;
    assets: string;
  }[];
  templates: {
    template_id: string;
    assets: string;
  }[];
}

// gets the owned assets of the user from the collection
const useGetOwnedTemplates = () => {
  const { user } = useWaxUser();

  const { data } = useAtomicGetter<useGetOwnerTemplatesResponseProps>(
    user
      ? {
          uri: `/atomicassets/v1/accounts/${user.wallet}/cryptopuppie`
        }
      : undefined
  );

  if (!data) return;

  let allTemplates: string[] = [];
  for (const i of data.templates) {
    allTemplates.push(i.template_id);
  }

  return allTemplates;
};

export default useGetOwnedTemplates;
