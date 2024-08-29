    public partial class CreatorClass
    {
        [JsonProperty("aliases")]
        public string[] Aliases { get; set; }

        [JsonProperty("discord")]
        public Discord Discord { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("steam")]
        public Steam Steam { get; set; }

        [JsonProperty("twitch")]
        public Twitch Twitch { get; set; }

        [JsonProperty("youtube")]
        public Youtube Youtube { get; set; }
    }

    public partial class Discord
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("partner")]
        public bool? Partner { get; set; }

        [JsonProperty("username")]
        public string Username { get; set; }
    }

    public partial class Steam
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }
    }

    public partial class Twitch
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("partner")]
        public bool? Partner { get; set; }
    }

    public partial class Youtube
    {
        [JsonProperty("handle")]
        public string Handle { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("partner")]
        public bool? Partner { get; set; }
    }
