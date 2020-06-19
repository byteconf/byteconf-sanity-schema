const organizer = {
  title: "Organizer",
  name: "organizer",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      required: true,
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      required: true,
    },
  ],
};

export default organizer;
