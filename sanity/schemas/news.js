export default {
    name: 'news',
    title: 'Calls & News',
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
        name: 'pageDesc',
        title: 'Page Short Description',
        description: 'Shows up in the news and calls Listings so could be the first paragraph of the block copied again or a brief overview',
        type: 'array',
        of: [{type: 'block'}]
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
          { type: 'headingText'},
          {type: 'logoContainer'},
          { type: 'imageCarousel' },
          { type: 'imageCustom' },
          { type: 'lineDivider'},
          { type: 'textImageBox'},
          { type: 'video' },
        ]
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo'
      },
      {
        name: 'isPostActive',
        title: 'Active Post',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Current', value: 'current' },
            { title: 'Past', value: 'past' },
          ]
        },
        validation: Rule => Rule.required().min(1)
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
  