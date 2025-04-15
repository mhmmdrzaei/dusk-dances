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
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      description: 'Should the video start playing automatically?',
      initialValue: false
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      description: 'Should the video loop continuously?',
      initialValue: false
    },
    {
      name: 'controls',
      title: 'Show Controls',
      type: 'boolean',
      description: 'Should the video player display controls (play, pause, etc.)?',
      initialValue: true
    },
    {
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      description: 'Should the video start muted?',
      initialValue: false
    },
    // {
    //   name: 'poster',
    //   title: 'Poster Image',
    //   type: 'image',
    //   description: 'Optional image to display before the video starts playing.'
    // }
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      // posterImageUrl: 'poster.asset.url'
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