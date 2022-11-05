import { useGetTemplateID } from '@cryptopuppie/useatomicassets';

const useGetTemplate = (templateId?: string | number) => {
  return useGetTemplateID(
    templateId
      ? {
          collectionName: 'cryptopuppie',
          templateID: Number(templateId)
        }
      : null
  );
};

export default useGetTemplate;
