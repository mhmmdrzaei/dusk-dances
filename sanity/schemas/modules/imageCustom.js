export default {
  name: 'imageCustom', // Changed name to avoid conflict with Sanity's built-in 'image' type
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image Upload',
      type: 'image',
      description: 'Upload or select the image.',
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption (Optional)',
      type: 'string',
      description: 'Optional text to display below the image.',
    },
    {
      name: 'width',
      title: 'Image Width',
      type: 'string',
      options: {
        list: [
          { title: 'Full Width', value: 'full' },
          { title: 'Half Width', value: 'half' },
          { title: 'One Third Width', value: 'oneThird' },
        ],
        layout: 'radio', // Use radio buttons for better visual selection
      },
      description: 'Select the desired width for the image within its container.',
      initialValue: 'full', // Set a default width
    },
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      altText: 'alt',
      caption: 'caption',
      width: 'width',
    },
    prepare({ imageUrl, altText, caption, width }) {
      return {
        title: altText || 'Image',
        subtitle: `${caption ? caption + ' - ' : ''}Width: ${
          width === 'full' ? 'Full' : width === 'half' ? 'Half' : '1/3'
        }`,
        media: imageUrl,
      };
    },
  },
};