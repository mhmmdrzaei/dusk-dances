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
      title: 'Hero Tile',
      type: 'string',
      description: 'Title for the hero section.'
    },
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      altText: 'image.alt',
      caption: 'imageCaption',
      text: 'text',
      title: 'title'
    },
    prepare({ imageUrl, altText, caption, text, title }) {
      return {
        subtitle: caption || altText || 'No caption or alt text',
        media: imageUrl,
        text,
        title,
      };
    }
  }
};