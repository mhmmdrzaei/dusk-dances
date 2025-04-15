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
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Important for SEO and accessibility.',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
              description: 'Optional text to display below or alongside the image.'
            }
          ],
          preview: {
            select: {
              imageUrl: 'asset.url',
              altText: 'alt',
              caption: 'caption'
            },
            prepare({ imageUrl, altText, caption }) {
              return {
                title: altText || 'Gallery Image',
                subtitle: caption,
                media: imageUrl
              };
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).required(),
      description: 'Add the images for your gallery. Each image can have an alt text and an optional caption.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      imageCount: 'images.length',
      firstImage: 'images.0.asset.url'
    },
    prepare({ title, imageCount, firstImage }) {
      return {
        title: title || 'Image Gallery',
        subtitle: imageCount > 0 ? `${imageCount} images` : 'No images added',
        media: firstImage
      };
    }
  }
};