// modules/gradientLine.js
export default {
    name: 'gradientLine',
    title: 'Gradient Line',
    type: 'object',
    fields: [
      {
        name: 'align',
        title: 'Align',
        type: 'string',
        options: {
          list: [
            { title: 'Left', value: 'left' },
            { title: 'Right', value: 'right' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'left'
      }
    ],
    preview: {
      prepare() {
        return {
          title: 'Gradient Line',
        }
      }
    }
  }
  