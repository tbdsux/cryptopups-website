import { Deta } from 'deta';

const deta = Deta(process.env.PROJECT_KEY ?? '');
const db = deta.Base('WebLogin');

export { deta, db };
