type SocialMediaAccount = {
  id: string
  name?: string
  partner: boolean
  username?: string
  handle?: string
}

type Person = {
  name: string
  steam: SocialMediaAccount
  discord: SocialMediaAccount
  twitch: SocialMediaAccount
  youtube: SocialMediaAccount
}

type Company = {
  name: string
  logo: string
}

export type { SocialMediaAccount, Person, Company }
