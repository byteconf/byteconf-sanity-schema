import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import event from './event'
import event_speaker from './event_speaker'
import speaker from './speaker'
import sponsor from './sponsor'
import sponsorship_tier from './sponsorship_tier'
import talk from './talk'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([event, event_speaker, speaker, sponsor, sponsorship_tier, talk]),
})
