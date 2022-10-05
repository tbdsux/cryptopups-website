const atomicassets = process.env.NEXT_PUBLIC_ATOMICASSETS ?? '';
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT ?? '';
const chainId = process.env.NEXT_PUBLIC_CHAIN_ID ?? '';
const dApp = 'worldofcryptopups.com';
const bloks = process.env.NEXT_PUBLIC_BLOKS ?? '';
const cordyApi = process.env.NEXT_PUBLIC_CORDY_API ?? '';
const waxGGContract = process.env.NEXT_PUBLIC_WAXGG_CONTRACT ?? '';

const isDev = process.env.NEXT_PUBLIC_IS_DEV === 'true';

export { atomicassets, endpoint, chainId, dApp, bloks, cordyApi, waxGGContract, isDev };
