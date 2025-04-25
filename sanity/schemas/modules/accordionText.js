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
        name: 'subHeading',
        title: 'Sub Heading',
        type: 'string',
      },
      {
        name: 'text',
        title: 'Text',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'ctaButton' }
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'background',
        title: 'Background',
        type: 'string',
        options: {
          list: [
            { title: 'Blue', value: 'blue' },
            { title: 'Gray', value: 'gray' },

          ],
          layout: 'dropdown'
        },
        initialValue: 'gray'
      }
    ],
    preview: {
      prepare() {
        return {
          title: 'Accordion Text'
        }
      }
    }
  }