export default {
  name: 'imageCarousel',
  title: 'Image Carousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Carousel Title (Optional)',
      type: 'string',
      description: 'Optional title for internal use or display above the carousel.'
    },
    {
      name: 'slides',
      title: 'Carousel Slides',
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
                  validation: Rule => Rule.required()
                }
              ]
            },
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
              description: 'Optional text to display below or alongside the image.'
            },
          ],
        }
      ],
      validation: Rule => Rule.min(1).required(),
      description: 'Add the images for your carousel. Each image can have a caption, alt text, and a link.'
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      description: 'Should the carousel automatically advance through the slides?',
      initialValue: false
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title, slideCount }) {
      return {
        title: title || 'Image Carousel',
      };
    }
  }
};