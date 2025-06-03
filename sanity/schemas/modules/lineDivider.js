export default {
    name: 'lineDivider',
    title: 'Line Divider',
    type: 'object',
    fields: [
      {
        name: 'background',
        title: 'Background',
        type: 'string',
        options: {
          list: [
            { title: 'Pink', value: 'pink' },
            { title: 'Orange', value: 'orange' },

          ],
          layout: 'dropdown'
        },
        initialValue: 'orange'
      }
    ],
    preview: {
      prepare() {
        return {
          title: 'Line divider'
        }
      }
    }
  }