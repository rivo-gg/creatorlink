import java.util.List;

public class CreatorClass {
    private String name;
    private List<String> aliases;
    private Steam steam;
    private Discord discord;
    private Twitch twitch;
    private Youtube youtube;

    public CreatorClass(String name, List<String> aliases, Steam steam, Discord discord, Twitch twitch, Youtube youtube) {
        this.name = name;
        this.aliases = aliases;
        this.steam = steam;
        this.discord = discord;
        this.twitch = twitch;
        this.youtube = youtube;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getAliases() {
        return aliases;
    }

    public void setAliases(List<String> aliases) {
        this.aliases = aliases;
    }

    public Steam getSteam() {
        return steam;
    }

    public void setSteam(Steam steam) {
        this.steam = steam;
    }

    public Discord getDiscord() {
        return discord;
    }

    public void setDiscord(Discord discord) {
        this.discord = discord;
    }

    public Twitch getTwitch() {
        return twitch;
    }

    public void setTwitch(Twitch twitch) {
        this.twitch = twitch;
    }

    public Youtube getYoutube() {
        return youtube;
    }

    public void setYoutube(Youtube youtube) {
        this.youtube = youtube;
    }

    public static class Steam {
        private String id;
        private String name;

        public Steam(String id, String name) {
            this.id = id;
            this.name = name;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    public static class Discord {
        private String id;
        private Boolean partner;
        private String username;

        public Discord(String id, Boolean partner, String username) {
            this.id = id;
            this.partner = partner;
            this.username = username;
        }
    
        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }
        
        public Boolean getPartner() {
            return partner;
        }

        public void setPartner(Boolean partner) {
            this.partner = partner;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }
    }


    public static class Twitch {
        private String id;
        private Boolean partner;

        public Twitch(String id, Boolean partner) {
            this.id = id;
            this.partner = partner;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public Boolean getPartner() {
            return partner;
        }

        public void setPartner(Boolean partner) {
            this.partner = partner;
        }
    }

    public static class Youtube {
        private String id;
        private String handle;
        private Boolean partner;

        public Youtube(String id, String handle, Boolean partner) {
            this.id = id;
            this.handle = handle;
            this.partner = partner;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getHandle() {
            return handle;
        }

        public void setHandle(String handle) {
            this.handle = handle;
        }

        public Boolean getPartner() {
            return partner;
        }

        public void setPartner(Boolean partner) {
            this.partner = partner;
        }
    }
}
