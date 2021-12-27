import path from 'path';

export const PORT = process.env.PORT || 3000;

export const RUNTIME_DIR =
  process.env.RUNTIME_DIR || path.resolve(process.cwd(), '.run');

export const LOG_DIR = process.env.LOG_DIR || path.resolve(RUNTIME_DIR, 'logs');

export const LOG_FILE = process.env.LOG_FILE || 'server.log';

export const CLIENT_DIST_DIR =
  process.env.CLIENT_DIST_DIR || path.resolve(__dirname, '../../client/dist');

export const CLIENT_INDEX_HTML = path.resolve(CLIENT_DIST_DIR, 'index.html');
