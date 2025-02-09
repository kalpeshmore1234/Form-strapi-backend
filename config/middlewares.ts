export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https://form-strapi-backend.onrender.com"],
          "img-src": ["'self'", "data:", "blob:", "https://form-strapi-backend.onrender.com"],
          "media-src": ["'self'", "data:", "blob:", "https://form-strapi-backend.onrender.com"],
          "script-src": ["'self'", "'unsafe-inline'", "https://form-strapi-backend.onrender.com"],
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
