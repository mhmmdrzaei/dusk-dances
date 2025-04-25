export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title (Optional)',
      type: 'string',
      description: 'Optional title for internal use or display above the gallery.'
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'Upload or select an image for this slide.',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                  description: 'Important for SEO and accessibility.',
                },
                {
                  name: 'caption',
                  title: 'Caption (Optional)',
                  type: 'string',
                  description: 'Optional text to display below or alongside the image.'
                },
              ]
            },
           
          ],
        }
      ],
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Image Gallery',
      };
    }
  }
};