const talk = {
  title: "Talk",
  name: "talk",
  type: "document",
  fields: [
    {
      title: "Description",
      name: "description",
      type: "string"
    },
    {
      title: "Event",
      name: "event",
      type: "reference",
      to: [{ type: "event" }]
    },
    {
      title: "Level",
      name: "level",
      type: "string"
    },
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Position",
      name: "position",
      type: "number"
    },
    {
      title: "Slides",
      name: "slides",
      type: "string"
    },
    {
      title: "Event Speaker",
      name: "event_speaker",
      type: "reference",
      to: [{ type: "event_speaker" }]
    },
    {
      title: "Time",
      name: "time",
      type: "datetime"
    }
  ]
};

export default talk;
