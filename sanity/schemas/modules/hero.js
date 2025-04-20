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
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'imageCaption',
      title: 'Image Caption (Optional)',
      type: 'string',
      description: 'Optional text to display below the hero image.'
    },
    {
      name: 'text',
      title: 'Hero Text',
      type: 'string',
      description: 'Main text content for the hero section.'
    },
    {
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      description: 'Title for the hero section.'
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