const sponsorship_tier = {
  title: 'Sponsorship Tier',
  name: 'sponsorship_tier',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      required: true,
    },
    {
      title: 'Section Name',
      name: 'section_name',
      type: 'string',
      required: true,
    },
    {
      title: 'Sponsors',
      name: 'sponsors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sponsor' }] }],
    },
  ],
}

export default sponsorship_tier
