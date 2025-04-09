// schemas/mentorStaff.js
export default {
    name: 'mentorStaff',
    title: 'Mentor & Staff',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
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
        name: 'image',
        title: 'Person Image',
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string'
          }
        ]
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string'
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'website',
        title: 'Website',
        type: 'url'
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'role',
        title: 'Role',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'Mentor', value: 'mentor' },
            { title: 'Staff', value: 'staff' }
          ]
        },
        validation: Rule => Rule.required().min(1)
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
        roles: 'role'
      },
      
    }
  }