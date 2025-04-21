export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for internal use or display.'
    },
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'Enter the URL of the video from platforms like YouTube or Vimeo.',
      validation: Rule =>
        Rule.required().uri({
          scheme: ['https', 'http'],
          allowRelative: false
        })
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare({ title, url, platform, posterImageUrl }) {
      let subtitle = platform ? `Platform: ${platform}` : '';
      if (url) {
        subtitle += subtitle ? ` - URL: ${url}` : `URL: ${url}`;
      }
      return {
        title: title || 'Embedded Video',
        subtitle: subtitle,
        media: posterImageUrl
      };
    }
  }
};