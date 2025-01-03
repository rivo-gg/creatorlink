import type { Person } from '@/types'

/**
 * An example object containing information about a person and their social media accounts.
 *
 * @type {{ papaplatte: Person }}
 */
export const example: { papaplatte: Person } = {
  papaplatte: {
    name: 'Papaplatte',
    steam: {
      id: '76561198013760707',
      name: 'lattensepp',
      partner: false
    },
    discord: {
      id: '169926504657059840',
      username: 'papaplatte420',
      partner: true
    },
    twitch: {
      id: 'papaplatte',
      partner: true
    },
    youtube: {
      handle: '@papaplatte',
      id: 'UCDmbhGe7-wC1a55l5ZYAZJw',
      partner: true
    }
  }
}
