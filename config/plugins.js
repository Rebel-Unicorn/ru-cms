module.exports = ({env}) => ({
  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: env('NEON_APIKEY'), // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: env('NEON_PROJECT_NAME'), // the neon project under wich your DB runs
      neonRole: env('NEON_ROLE'), // create it manually under roles for your project first
      //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    }
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
