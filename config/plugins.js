module.exports = ({env}) => ({
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
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 10, // Default is 5
    }
  },
  ckeditor: {
    enabled: true,
  },
});
