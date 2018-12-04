const event_speaker = {
  title: "Event Speaker",
  name: "event_speaker",
  type: "document",
  preview: {
    select: {
      title: 'speaker.name',
      subtitle: 'event.name'
    }
  },
  fields: [
    {
      title: "Available Live",
      name: "available_live",
      type: "boolean"
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
