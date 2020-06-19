const event = {
  title: "Event",
  name: "event",
  type: "document",
  fields: [
    {
      title: "CFP Link",
      name: "cfp_link",
      type: "string",
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
    },
    {
      title: "Cover Path",
      name: "cover_path",
      type: "string",
    },
    {
      title: "OG Meta Image Path",
      name: "og_meta_image_path",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "End Date",
      name: "end_date",
      type: "datetime",
    },
    {
      title: "Event Type",
      name: "event_type",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Published",
      name: "published",
      type: "boolean",
    },
    {
      title: "ConvertKit RSVP Form ID",
      name: "ck_rsvp_form_id",
      type: "string",
    },
    {
      title: "RSVP URL",
      name: "rsvp_url",
      type: "string",
    },
    {
      title: "Simple Copy",
      name: "simple_copy",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Event Speakers",
      name: "event_speakers",
      type: "array",
      of: [{ type: "reference", to: { type: "event_speaker" } }],
    },
    {
      title: "Sponsor Interest Link",
      name: "sponsor_interest_link",
      type: "string",
    },
    {
      title: "Start Date",
      name: "start_date",
      type: "datetime",
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        layout: "radio",
        list: ["planning", "announced", "upcoming", "concluding", "finished"],
      },
    },
    {
      title: "Talks",
      name: "talks",
      type: "array",
      of: [{ type: "reference", to: { type: "talk" } }],
    },
    {
      title: "Twitter Announcement",
      name: "twitter_announcement",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "string",
    },
    {
      title: "YouTube Playlist",
      name: "youtube_playlist",
      type: "string",
    },
    {
      title: "Sponsorship Tiers",
      name: "sponsorship_tiers",
      type: "array",
      of: [{ type: "sponsorship_tier" }],
    },
    {
      title: "Calendar File",
      name: "calendar_file",
      type: "file",
    },
    {
      title: "Organizers",
      name: "organizers",
      type: "array",
      of: [{ type: "organizer" }],
    },
  ],
};

export default event;
