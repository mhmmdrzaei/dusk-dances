export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
      {
        name: 'seoTitle',
        title: 'SEO Title',
        type: 'string'
      },
      {
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        rows: 3
      },
      {
        name: 'seoImage',
        title: 'SEO Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }