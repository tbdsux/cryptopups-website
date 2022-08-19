const atomicassets = process.env.NEXT_PUBLIC_ATOMICASSETS ?? '';
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT ?? '';
const chainId = process.env.NEXT_PUBLIC_CHAIN_ID ?? '';
const dApp = 'worldofcryptopups.com';
const isDev = process.env.NEXT_PUBLIC_IS_DEV === 'true';

export { atomicassets, endpoint, chainId, dApp, isDev };
