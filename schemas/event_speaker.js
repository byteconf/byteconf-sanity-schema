const event_speaker = {
  title: "Event Speaker",
  name: "event_speaker",
  type: "document",
  fields: [
    {
      title: "Available Live",
      name: "status",
      type: "number"
    },
    {
      title: "Event",
      name: "event",
      type: "reference",
      to: [{ type: "event" }]
    },
    {
      title: "Speaker",
      name: "speaker",
      type: "reference",
      to: [{ type: "speaker" }]
    }
  ]
};

export default event_speaker;
