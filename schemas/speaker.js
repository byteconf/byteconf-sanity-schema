const speaker = {
  title: "Speaker",
  name: "speaker",
  type: "document",
  fields: [
    {
      title: "Company",
      name: "company",
      type: "string"
    },
    {
      title: "Github",
      name: "github",
      type: "string"
    },
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Image",
      name: "image",
      type: "image"
    },
    {
      title: "Static Image Path",
      name: "static_image_path",
      type: "string"
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string"
    },
    {
      title: "Event Speakers",
      name: "event_speakers",
      type: "array",
      of: [{ type: "reference", to: { type: "event_speaker" } }]
    },
    {
      title: "Website",
      name: "website",
      type: "string"
    }
  ]
};

export default speaker;
