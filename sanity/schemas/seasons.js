// schemas/events.js
export default {
    name: 'seasons',
    title: 'Seasons',
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
          source: 'name',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'featured',
        title: 'Featured',
        type: 'boolean'
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
          { type: 'imageCarousel' },
          { type: 'imageCustom' },
          { type: 'lineDivider'},
          { type: 'textImageBox'},
          { type: 'video' },
        ]
      },
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