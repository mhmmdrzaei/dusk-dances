export default {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'pageBlocks',
        title: 'Page Blocks',
        type: 'array',
        of: [
          { type: 'accordionText'},
          { type: 'bodyText'},
          { type: 'ctaButton'},
          { type: 'gallery' },
          { type: 'hero' },
          {type: 'headingText'},
          {type: 'logoContainer'},
          { type: 'imageCarousel' },
          { type: 'imageCustom' },
          { type: 'lineDivider'},
          { type: 'textImageBox'},
          { type: 'video' },
          {type: 'pageNav'},
          {
            type: 'canadaHelpsEmbed'
          }
        ]
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo'
      }
    ],
    preview: {
      select: {
        title: 'title',
        slug: 'slug.current'
      },
      prepare({ title, slug }) {
        return {
          title,
          subtitle: `/${slug}`
        }
      }
    }
  }
  