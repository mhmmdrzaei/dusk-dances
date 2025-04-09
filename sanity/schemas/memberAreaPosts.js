export default {
    name: "membersAreaPosts",
    title: "Members Area Posts",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          {
            type: "block",
            title: "Text",
            styles: [{ title: "Normal", value: "normal" }],
            marks: {
              decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }],
            },
          },
          {
            type: "image",
            title: "Image",
            options: { hotspot: true },
          },
          {
            type: "object",
            name: "video",
            title: "Video Embed",
            fields: [
              {
                name: "url",
                title: "Video URL",
                type: "url",
                description: "Supports YouTube & Vimeo links",
                validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }).required(),
              },
            ],
          },
        ],
      },
    ],
  };
  