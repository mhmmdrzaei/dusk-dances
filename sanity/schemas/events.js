// schemas/events.js
export default {
    name: 'events',
    title: 'Events',
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
          // done
          { type: 'headingText' },
          { type: 'accordionText'},
          { type: 'video' },
          { type: 'lineDivider'},
          { type: 'imageCarousel' },
          { type: 'hero' },

          // TODO check fields
          { type: 'textImageBox'},
          { type: 'bodyText'},
          
          { type: 'gallery' },
          { type: 'imageCustom' },
        ]
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
        roles: 'role'
      },
      
    }
  }