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
          { type: 'heading' },
          { type: 'headingText' },
          { type: 'bodyText' },
          { type: 'logoContainer' },
          { type: 'ctaButton' },
          { type: 'membersCarousel' },
          { type: 'gradientLine' },
          { type: 'textImageBox' }
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
  