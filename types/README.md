## Types for Creator Database

**Purpose:**

This folder contains type definitions for the Creator Database JSON data in various programming languages. These type definitions can be used to provide strong typing and improve code maintainability when working with the database.

**Usage:**

1. **Choose the appropriate type definition file** based on the programming language you're using.
2. **Import or include the type definitions** in your project.
3. **Use the type definitions** to represent and manipulate the Creator Database data in your code.

**Example (TypeScript):**

```typescript
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

// Example 
const honeypuu: Creator = {
  name: "HoneyPuu",
  aliases: null,
  steam: {
    id: "76561198405910426",
    name: "HoneyPuu"
  },
  discord: {
    id: "247064492427444224",
    username: "honeypuu",
    partner: false
  },
  twitch: {
    id: "honeypuu",
    partner: true
  },
  youtube: {
    handle: "honeypuu",
    id: "UC6lv714giE5fvmlUhS3d9gg",
    partner: true
  }
};
```

**Disclaimer:**

While we strive to provide accurate and up-to-date type definitions for the Creator Database, we cannot guarantee their correctness or completeness. It's always recommended to verify the data against the actual JSON structure.
