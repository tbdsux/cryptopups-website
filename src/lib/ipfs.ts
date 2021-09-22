const ipfsServers = ['https://gateway.pinata.cloud', 'https://ipfs.io', 'https://gateway.ipfs.io'];

const randomIPFSServer = (): string => {
  const r = Math.floor(Math.random() * ipfsServers.length);

  return ipfsServers[r];
};

export { randomIPFSServer };
