export default {
    name: 'accordionText',
    title: 'Accordion Text',
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
    preview: {
      prepare() {
        return {
          title: 'Accordion Text'
        }
      }
    }
  }