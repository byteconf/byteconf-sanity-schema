const sponsor = {
  title: "Sponsor",
  name: "sponsor",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "URL",
      name: "url",
      type: "string"
    },
    {
      title: "Image",
      name: "image",
      type: "string"
    },
    {
      title: "Level",
      name: "level",
      type: "string"
    },
    {
      title: "Type",
      name: "type",
      type: "string"
    },
    {
      title: "Event",
      name: "event",
      type: "reference",
      to: [{ type: "event" }]
    }
  ]
};

export default sponsor;
