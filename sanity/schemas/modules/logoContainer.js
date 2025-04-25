// TODO check what fields we need
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
                description: "fill out if you would like the user to go to the funder's website",
                type: 'url'
              }
            ],
            preview: {
              prepare() {
                return {
                  title: 'Logo',
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