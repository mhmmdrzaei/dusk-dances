export default {
    name: 'headingText',
    title: 'Heading Text',
    type: 'object',
    fields: [
      {
        name: 'headingLevel',
        title: 'Heading Level',
        type: 'string',
        options: {
          list: [
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' }
          ],
          layout: 'dropdown'
        }
      },
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
        name: 'textAlign',
        title: 'Text Align',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' },
            { title: 'Center', value: 'center' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'left'
      },
      {
        name: 'text',
        title: 'Heading Text',
        type: 'text'
      }
    ],
    preview: {
      select: {
        title: 'text',
        headingLevel: 'headingLevel',
        width: 'width'
      },
      prepare({ title, headingLevel, width }) {
        return {
          title: title || 'Heading Text',
          subtitle: `${headingLevel || 'h1'} - Width: ${width || '100'}%`
        }
      }
    }
  }