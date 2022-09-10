/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'wax.atomichub.io',
      'pbs.twimg.com',
      'neftyblocks.com',
      'gateway.pinata.cloud',
      'ipfs.atomichub.io',
      'cdn.discordapp.com',
      'atomichub-ipfs.com'
    ]
  }
};

module.exports = nextConfig;
