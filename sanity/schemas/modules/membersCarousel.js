export default {
    name: 'membersCarousel',
    title: 'Members Carousel',
    
    description: 'Randomly selects 3 members with first image, location, website and slug',
    type: "object",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
    ],
    preview: {
      select: {
        title: "title",
      },
    },
    
  }

