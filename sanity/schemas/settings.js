export default {
    name: 'siteSettings',
    title: 'Settings',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Prevent creating or deleting settings document
    fields: [
      {
        name: 'siteTitle',
        title: 'Site Title',
        type: 'string'
      },
      {
        name: 'siteDescription',
        title: 'Site Description',
        type: 'string'
      },
      {
        name: 'headingMenu',
        title: 'Heading Menu',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'menuItemName',
                title: 'Menu Item Name',
                type: 'string'
              },
              {
                name: 'menuItemUrl',
                title: 'Menu Item URL',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'headingLogo',
        title: 'Heading Logo',
        type: 'image',

      },
      {
        name: 'membersAreaPassword',
        title: 'Members Area Password',
        type: 'string'
      },
      {
        name: 'footerLogo',
        title: 'icon logo',
        type:'image',
      },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'socialLink',
                title: 'Social Link',
                type: 'string'
              },
              {
                name: "icon",
                title: "Icon",
                type: "string",
                options: {
                  list: [
                    { title: "Facebook", value: "faFacebook" },
                    { title: "Twitter", value: "faTwitter" },
                    { title: "Instagram", value: "faInstagram" },
                    { title: "LinkedIn", value: "faLinkedin" },
                    { title: "YouTube", value: "faYoutube" },
                    { title: "Email", value: "faEmail" },
                  ],
                },
              },
            ]
          }
        ]
      },
      {
        name: 'footerMenu',
        title: 'Footer Menu',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'menuItemName',
                title: 'Menu Item Name',
                type: 'string'
              },
              {
                name: 'menuItemUrl',
                title: 'Menu Item URL',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'email',
        title: 'Email',
        type: 'object',
        fields: [
          {
            name: 'emailLabel',
            title: 'Email Label',
            type: 'string'
          },
          {
            name: 'emailUrl',
            title: 'Email URL',
            type: 'string'
          }
        ]
      },
      {
        name:'seoImg',
        title: 'Seo Image',
        type: 'image',
        description: 'Image will be used if the speicifc pages do not have another image',
        
      }
    ],


    preview: {
      select: {
        title: 'siteTitle'
      },
      prepare({ title }) {
        return {
          title: title || 'Site Settings'
        }
      }
    }
  }