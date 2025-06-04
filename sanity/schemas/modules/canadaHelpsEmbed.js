export default {
  name: 'canadaHelpsEmbed',
  title: 'CanadaHelps Embed',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label (for internal reference)',
      type: 'string',
    },
    {
      name: 'scriptSrc',
      title: 'Script Source URL',
      type: 'url',
      initialValue: 'https://www.canadahelps.org/secure/js/cdf_embed.2.js',
      validation: Rule => Rule.required(),
    },
    {
      name: 'pageId',
      title: 'Page ID',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      initialValue: 'en',
    },
    {
      name: 'rootUrl',
      title: 'Root URL',
      type: 'url',
      initialValue: 'https://www.canadahelps.org',
    },
    {
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      initialValue: '0',
    },
    {
      name: 'async',
      title: 'Disable Cloudflare Async?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'label',
      pageId: 'pageId',
    },
    prepare({ title, pageId }) {
      return {
        title: title || 'CanadaHelps Embed',
        subtitle: `Page ID: ${pageId}`,
      };
    },
  },
};
