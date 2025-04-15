export default {
    name: 'lineDivider',
    title: 'Line Divider',
    type: 'object',
    fields: [
      {
        name: 'thickness',
        title: 'Thickness',
        type: 'number',
        initialValue: 2,
      },
      {
        name: 'spacingX',
        title: 'Spacing X (pixels)',
        type: 'number',
        initialValue: 8,
      },
      {
        name: 'spacingY',
        title: 'Spacing Y (pixels)',
        type: 'number',
        initialValue: 8,
      },
    ],
    preview: {
      prepare() {
        return {
          title: 'Line divider'
        }
      }
    }
  }