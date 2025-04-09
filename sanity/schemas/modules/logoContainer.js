export default {
    name: 'logoContainer',
    title: 'Logo Container',
    type: 'object',
    fields: [
      {
        name: 'logos',
        title: 'Logos',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Logo Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                  }
                ]
              },
              {
                name: 'url',
                title: 'Link URL',
                type: 'url'
              }
            ],
            preview: {
              select: {
                media: 'image',
                alt: 'image.alt'
              },
              prepare({ media, alt }) {
                return {
                  title: alt || 'Logo',
                  media: media
                }
              }
            }
          }
        ]
      }
    ],
    preview: {
      prepare() {
        return {
          title: 'Logo Container'
        }
      }
    }
  }