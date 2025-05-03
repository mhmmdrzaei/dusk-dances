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
        name: 'pageDesc',
        title: 'Page Short Description',
        description: 'Shows up in the Seasons archives listings so could be the first paragraph of the block copied again or a brief overview',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        name: 'seasonsLocations',
        title: 'Seasons Locations',
        type: 'array',
      
        of: [
          {
            type: 'reference',
            to: [{ type: 'seasonLocations' }],
          },
        ],
      },
      {
        name: 'seasonInformation',
        title: 'Season Information',
        type: 'object',
        fields: [
          {
            name: 'pageSideText',
            title: 'Information Side Text',
            type: 'array',
            
            of: [{ type: 'block' }, {type: 'ctaButton'}],
          },
          {
            name: 'googleMapsLink',
            title: 'Google Maps Embed',
            type: 'text',
            rows: 4, 
            
            description: 'Enter the URL for embedding a Google Maps location.',
          },
          {
            name: 'poster',
            title: 'Poster Image',
            type: 'image',
          
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
              },
              {
                name: 'caption',
                title: 'caption',
                type: 'string'
              },
            ],
          }
        ]
      },

      {
        name: 'pageBlocksTop',
        title: 'Page Blocks Top',
        type: 'array',
        of: [
          { type: 'hero' },
          { type: 'headingText' },
          { type: 'imageCustom' },
          { type: 'lineDivider' },
          { type: 'video' },
        ],
      },
      {
        name: 'pageDetailsBlocks',
        title: 'Page Details Blocks',
        description: 'appears beside the information text and then after the info box',
        type: 'array',
      
        of: [
          { type: 'accordionText' },
          { type: 'bodyText' },
          { type: 'ctaButton' },
          { type: 'gallery' },
          { type: 'hero' },
          { type: 'headingText' },
          { type: 'logoContainer' },
          { type: 'imageCarousel' },
          { type: 'imageCustom' },
          { type: 'lineDivider' },
          { type: 'textImageBox' },
          { type: 'video' },
        ]
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