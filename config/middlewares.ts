export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https://next-js-form-lac.vercel.app"],
          "img-src": ["'self'", "data:", "blob:", "https://next-js-form-lac.vercel.app"],
          "media-src": ["'self'", "data:", "blob:", "https://next-js-form-lac.vercel.app"],
          "script-src": ["'self'", "'unsafe-inline'", "https://next-js-form-lac.vercel.app"],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'], // OR replace '*' with ["https://your-nextjs-domain.com"] for security
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
