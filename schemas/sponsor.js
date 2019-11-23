const sponsor = {
  title: 'Sponsor',
  name: 'sponsor',
  type: 'document',
  fields: [
    {
      title: 'Company Name',
      name: 'company_name',
      type: 'string',
      required: true,
    },
    {
      title: 'Company URL',
      name: 'url',
      type: 'string',
      required: true,
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      required: true,
    },
  ],
}

export default sponsor
