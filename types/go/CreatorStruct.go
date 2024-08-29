package main

type Creator	 struct {
	Aliases []string `json:"aliases"`
	Discord *Discord `json:"discord"`
	Name    string   `json:"name"`
	Steam   *Steam   `json:"steam"`
	Twitch  *Twitch  `json:"twitch"`
	Youtube *Youtube `json:"youtube"`
}

type Discord struct {
	ID       *string `json:"id"`
	Partner  *bool   `json:"partner"`
	Username *string `json:"username"`
}

type Steam struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type Twitch struct {
	ID      *string `json:"id"`
	Partner *bool   `json:"partner"`
}

type Youtube struct {
	Handle  *string `json:"handle"`
	ID      *string `json:"id"`
	Partner *bool   `json:"partner"`
}
