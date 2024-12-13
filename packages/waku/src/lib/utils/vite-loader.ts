import { createServer as createViteServer } from 'vite';
import { fileURLToFilePath } from '../utils/path.js';

export const loadServerFile = async (fileURL: string) => {
  const vite = await createViteServer({
    ssr: {
      external: ['waku'],
    },
  });
  try {
    return vite.ssrLoadModule(fileURLToFilePath(fileURL));
  } finally {
    // FIXME this is really a bad hack
    setTimeout(() => {
      vite.close().catch(() => {});
    }, 1000);
  }
};
