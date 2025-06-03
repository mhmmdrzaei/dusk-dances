export default {
    name: 'textImageBox',
    title: 'Text Image Box',
    type: 'object',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string'
          },
          {
            name: 'caption',
            title: 'Caption',
            type: 'string'
          }
        ]
      },
      {
        name: 'textContent',
        title: 'Text Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'ctaButton' }
        ]
      },
      {
        name: 'alignment',
        title: 'Alignment',
        type: 'string',
        options: {
          list: [
            { title: 'Text Image', value: 'textImage' },
            { title: 'Image Text', value: 'imageText' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'textImage'
      },
      {
        name: 'background',
        title: 'Background',
        type: 'string',
        options: {
          list: [
            { title: 'Green', value: 'green' },
            { title: 'Blue', value: 'blue' },
            { title: 'Pink', value: 'pink' },

          ],
          layout: 'dropdown'
        },
        initialValue: 'blue'
      }
    ],
    preview: {
      select: {
        media: 'image',
        alignment: 'alignment'
      },
      prepare({ media, alignment }) {
        return {
          title: 'Text Image Box',
          subtitle: `Alignment: ${alignment || 'textImage'}`,
          media: media
        }
      }
    }
  }