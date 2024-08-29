interface SocialMedia {
  id: string | null;
  name?: string | null;
  username?: string | null;
  partner?: boolean | null;
  handle?: string | null;
}

interface Creator {
  name: string;
  aliases: string[] | null;
  steam: SocialMedia | null;
  discord: SocialMedia | null;
  twitch: Omit<SocialMedia, 'name' | 'username' | 'handle'> | null;
  youtube: Omit<SocialMedia, 'name' | 'username'> | null;
}
