export default {
    name: 'accordionText',
    title: 'Accordion Text',
    type: 'object',
    fields: [
      {
        name: 'items',
        title: 'Accordion Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Heading',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'text',
                title: 'Text',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
        validation: (Rule) => Rule.required().min(1),
      },
    ],
    preview: {
      prepare() {
        return {
          title: 'Accordion Text'
        }
      }
    }
  }