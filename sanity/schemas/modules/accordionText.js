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
          { type: 'ctaButton' },
          {type: 'video'},
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'background',
        title: 'Heading',
        type: 'string',
        options: {
          list: [
            { title: 'Blue', value: 'blue' },
            { title: 'Pink', value: 'pink' },

          ],
          layout: 'dropdown'
        },
        initialValue: 'blue'
      }
    ],
    preview: {
      select: {
        heading: 'heading',
        subHeading: 'subHeading'
      },
      prepare(selection) {
        const { heading, subHeading } = selection; // Extract heading from the selection
        return {
          title:'Accordion Text',  // Show heading if available, otherwise fallback
          subtitle: `${heading || 'No Heading'},  ${subHeading || ''}` // Provide a fallback subtitle
        };
      }
    }
  }