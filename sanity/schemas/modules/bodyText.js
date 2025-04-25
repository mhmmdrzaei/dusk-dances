export default {
    name: 'bodyText',
    title: 'Body Text',
    type: 'object',
    fields: [
      {
        name: 'width',
        title: 'Width',
        type: 'string',
        options: {
          list: [
            { title: '50%', value: '50' },
            { title: '100%', value: '100' }
          ],
          layout: 'dropdown'
        },
        initialValue: '100'
      },
      {
        name: 'content',
        title: 'Body Text',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'ctaButton' },
          { type: 'video' }
          
        ]
      },
      {
        name: 'background',
        title: 'Background',
        type: 'string',
        options: {
          list: [
            { title: 'Green', value: 'Green' },
            { title: 'Blue', value: 'blue' },
            { title: 'Gray', value: 'gray' },

          ],
          layout: 'dropdown'
        },
        initialValue: 'gray'
      }
    ],
    preview: {
      select: {
        width: 'width',
        background: 'background'
      },
      prepare({ width, background }) {
        return {
          title: 'Body Text',
          subtitle: `Width: ${width || '100'}% - Background: ${background || 'white'}`
        }
      }
    }
  }
  