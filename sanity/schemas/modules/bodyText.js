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
            { title: '25%', value: '25' },
            { title: '50%', value: '50' },
            { title: '75%', value: '75' },
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
        of: [{ type: 'block' }]
      },
      {
        name: 'background',
        title: 'Background',
        type: 'string',
        options: {
          list: [
            { title: 'White with black text', value: 'white' },
            { title: 'Black with white text', value: 'black' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'white'
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
  