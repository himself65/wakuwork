/** @type {import('waku/config').Config} */
export default {
  middleware: () => [
    import('waku/middleware/context'),
    import('./src/redirects.js'),
    import('waku/middleware/dev-server'),
    import('waku/middleware/rsc'),
    import('waku/middleware/ssr'),
  ],
};