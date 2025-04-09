export default {
    name: 'member',
    title: 'Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Member Name',
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
        name: 'images',
        title: 'Member Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true
            },
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string'
              },
              {
                name: 'caption',
                title: 'Caption',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'location',
        title: 'Member Location',
        type: 'string'
      },
      {
        name: 'email',
        title: 'Member Email',
        type: 'string'
      },
      {
        name: 'website',
        title: 'Member Website',
        type: 'url'
      },
      {
        name: 'bio',
        title: 'Member Bio',
        type: 'array',
        of: [{ type: 'block' }]
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'images.0',
        location: 'location'
      },
      prepare({ title, media, location }) {
        return {
          title,
          subtitle: location,
          media
        }
      }
    }
  }
  