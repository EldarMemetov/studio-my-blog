const localizedBody = {
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 1", value: "h1" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
        },
      ],
    },
  ],
};

const post = {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "customId",
      title: "Custom ID (URL ID)",
      type: "slug",
      options: {
        source: (doc) => doc.title.en,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "object",
      title: "Title",
      fields: [
        { name: "ua", type: "string", title: "Ukrainian" },
        { name: "en", type: "string", title: "English" },
        { name: "de", type: "string", title: "German" },
      ],
    },
    {
      name: "body",
      type: "object",
      title: "Body",
      fields: [
        { name: "ua", title: "Ukrainian", ...localizedBody },
        { name: "en", title: "English", ...localizedBody },
        { name: "de", title: "German", ...localizedBody },
      ],
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
    },
  ],

  preview: {
    select: {
      titleUa: "title.ua",
      titleEn: "title.en",
      media: "mainImage",
    },
    prepare({ titleUa, titleEn, media }) {
      return {
        title: titleEn || titleUa || "Без заголовка",
        media,
      };
    },
  },
};

export default post;
