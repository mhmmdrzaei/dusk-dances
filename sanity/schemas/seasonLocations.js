// schemas/events.js
export default {
    name: 'seasonLocations',
    title: 'Season Locations',
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
        name: 'additionalSiteLocation',
        title: 'Site Specific Information',
        type: 'bodyText'
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