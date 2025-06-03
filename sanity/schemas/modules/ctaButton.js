export default {
    name: 'ctaButton',
    title: 'CTA Button',
    type: 'object',
    fields: [
      {
        name: 'buttonLabel',
        title: 'Button Label',
        type: 'string'
      },
      {
        name: 'buttonUrl',
        title: 'Button URL',
        type: 'string'
      },
      {
        name: 'openInNewWindow',
        title: 'Open in a new window',
        type: 'boolean',
        initialValue: false
      },
      {
        name: 'buttonColor',
        title: 'Button Color',
        type: 'string',
        options: {
          list: [
            { title: 'Blue', value: 'blue' },
            { title: 'Pink', value: 'pink' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'blue'
      },
      {
        name: 'buttonAlignment',
        title: 'Button Alignment',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' },
            {
              title:'Center', value:'center'
            }
          ],
          layout: 'dropdown'
        },
        initialValue: 'left'
      }
    ],
    preview: {
      select: {
        title: 'buttonLabel',
        color: 'buttonColor'
      },
      prepare({ title, color }) {
        return {
          title: title || 'CTA Button',
          subtitle: `Color: ${color || 'black'}`
        }
      }
    }
  }
  