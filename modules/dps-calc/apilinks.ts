// Adventurers, could be different for others
const PUPSKINS_API = `https://wax.api.atomicassets.io/atomicassets/v1/assets?owner={{owner}}&collection_name=cryptopuppie&schema_name=pupskincards&page=1&limit=1000&order=desc&sort=asset_id`;
const PUPPYCARDS_API = `https://wax.api.atomicassets.io/atomicassets/v1/assets?owner={{owner}}&collection_name=cryptopuppie&schema_name=puppycards&page=1&limit=1000&order=desc&sort=asset_id`;
const PUPITEMS_API = `https://wax.api.atomicassets.io/atomicassets/v1/assets?owner={{owner}}&collection_name=cryptopuppie&schema_name=pupitems&page=1&limit=1000&order=desc&sort=asset_id`;

export { PUPSKINS_API, PUPPYCARDS_API, PUPITEMS_API };
