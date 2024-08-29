# Creator Database

A JSON dataset for game developers and app creators to manage and reserve usernames for content creators across multiple platforms.

## Overview

The Creator Database is a simple JSON file containing information about content creators across various platforms such as Steam, Discord, Twitch, and YouTube. It's designed to help developers easily integrate popular content creators into their games or applications by providing cross-platform identity information.

## Structure

The database is structured as a JSON object where each key is a unique identifier for a creator, and the value is an object containing the creator's information across different platforms.

Example:

```json
{
  "papaplatte": {
    "name": "Papaplatte",
    "steam": {
      "id": "76561198013760707",
      "name": "lattensepp"
    },
    "discord": {
      "id": "169926504657059840",
      "username": "papaplatte420",
      "partner": true
    },
    "twitch": {
      "id": "papaplatte",
      "partner": true
    },
    "youtube": {
      "handle": "@papaplatte",
      "id": "UCDmbhGe7-wC1a55l5ZYAZJw",
      "partner": true
    }
  }
}
```

## Usage

To use this database, simply download the JSON file and parse it in your application. You can then lookup creators by their unique identifier or search through the data to find matches across platforms. Soon an API will follow!

## Contributing

We welcome contributions to expand and maintain this database. To add or update creator information:

1. Fork this repository
2. Add or modify the creator data in the JSON file
3. Submit a pull request with your changes

Please note that all submitted data will need to be verified before being merged into the main database.

## DMCA Takedown Requests

If you are a creator and would like your information removed from this database, please send a DMCA takedown request to:

dmca-creatorlink@rivo.gg

We will process your request as quickly as possible.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This database is provided "as is" without warranty of any kind. The maintainers of this database are not responsible for any inaccuracies or misuse of the data.
