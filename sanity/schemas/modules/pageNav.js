export default {
    name: 'pageNav',
    title: 'Page Nav',
    description: 'to appear on top of page if we want to reference other pages',
    type: 'object',
    fields: [
     {
            name: 'menuItemsPageNav',
            title: 'Menu Items',
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
                  },
                ]
              }
            ]
          },
    ],
  }