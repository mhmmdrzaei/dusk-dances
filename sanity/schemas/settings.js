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
                type: 'string',
              },
              {
                name: 'menuItemUrl',
                title: 'Menu Item URL',
                type: 'string',
                hidden: ({ parent }) => parent.menuType === 'submenu'

              },
              {
                name: 'hexColor',
                title: 'Menu Item Color',
                type: 'string',
                description: 'Enter a valid hex color code (e.g., #FF5733)',
                validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/).warning('Please enter a valid hex color code'),
                hidden: ({ parent }) => parent.menuType === 'direct'
              },
              {
                name: 'menuType',
                title: 'Menu Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Direct Link', value: 'direct' },
                    { title: 'Sub Menu', value: 'submenu' },
                  ],
                  layout: 'dropdown',
                },
                initialValue: 'direct',
              },
              {
                name: 'subMenuItems',
                title: 'Sub Menu Items',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'subMenuItemName',
                        title: 'Sub Menu Item Name',
                        type: 'string',
                      },
                      {
                        name: 'subMenuItemUrl',
                        title: 'Sub Menu Item URL',
                        type: 'string',
                      },
                    ],
                  },
                ],
                hidden: ({ parent }) => parent.menuType === 'direct'
              },
            ],
          },
        ],
      },
      {
        name: 'headingsidemenu',
        title: 'Heading Side Menu',
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
                type: 'string',
                hidden: ({ parent }) => parent?.linkType === 'dropdown'
              },
              {
                name: 'linkType',
                title: 'Link Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Link', value: 'link' },
                    { title: 'Button', value: 'button' },
                  ]
                }
              },
              {
                name: 'buttonStyle',
                title: 'Button Style',
                type: 'string',
                options: {
                  list: [
                    { title: 'Orange', value: 'orange' },
                    { title: 'Yellow', value: 'yellow' }
                  ]
                },
                hidden: ({ parent }) => parent?.linkType !== 'button'
              },
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
                title: "Icon",
                name: "icon",
                type: "iconPicker",
                options: {
                  providers: [ "fa"],
                  outputFormat: 'react',
                  storeSvg: true
              }
            }
            ]
          }
        ]
      },
      {
        name: 'footer',
        title: 'Footer',
        type: 'object',
        fields: [
             {
            name: 'column1',
            title: 'Column 1',
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Column 1 Heading',
                type: 'string'
              },
              {
                name: 'content',
                title: 'Column 1 Content',
                type: 'array',
                of: [{ type: 'block' }]
              }
            ]
          },
          {
            name: 'column2',
            title: 'Column 2',
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Column 2 Heading',
                type: 'string'
              },
              {
                name: 'content',
                title: 'Column 2 Content',
                type: 'array',
                of: [{ type: 'block' }]
              }
            ]
          },
          {
            name: 'row',
            title: 'Row',
            type: 'object',
            fields: [
              {
                name: 'heading',
                title: 'Row Heading',
                type: 'string'
              },
              {
                name: 'content',
                title: 'Row Content',
                type: 'array',
                of: [{ type: 'block' }]
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
                    type: 'string',
                    hidden: ({ parent }) => parent?.linkType === 'dropdown'
                  },
                  {
                    name: 'linkType',
                    title: 'Link Type',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Link', value: 'link' },
                        { title: 'Button', value: 'button' },
                      ]
                    }
                  },
                  {
                    name: 'buttonStyle',
                    title: 'Button Style',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Orange', value: 'orange' },
                        { title: 'Yellow', value: 'yellow' }
                      ]
                    },
                    hidden: ({ parent }) => parent?.linkType !== 'button'
                  },
                ]
              }
            ]
          },
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