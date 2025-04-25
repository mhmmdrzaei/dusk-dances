export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      description: 'Upload or select the main image for the hero section.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Image Alt Text',
          description: 'Important for SEO and accessibility.',
        },
        {
          name: 'imageCaption',
          title: 'Image Caption (Optional)',
          type: 'string',
          description: 'Optional text to display below the hero image.'
        },
      ]
    },

    {
      name: 'text',
      title: 'Hero Text',
      type: 'string',
      description: 'Main text content for the hero section.'
    },
    {
      name: 'heroLinksTo',
      title: 'Hero Box Link',
      type: 'string',
      description: 'fill out if on click the hero box navigates user to another page'
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Hero`,
      };
    }
  }
};