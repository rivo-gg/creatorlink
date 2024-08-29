use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct CreatorStruct {
    aliases: Option<Vec<String>>,
    discord: Option<Discord>,
    name: String,
    steam: Option<Steam>,
    twitch: Option<Twitch>,
    youtube: Option<Youtube>,
}

#[derive(Serialize, Deserialize)]
pub struct Discord {
    id: Option<String>,
    partner: Option<bool>,
    username: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct Steam {
    id: Option<String>,
    name: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct Twitch {
    id: Option<String>,
    partner: Option<bool>,
}

#[derive(Serialize, Deserialize)]
pub struct Youtube {
    handle: Option<String>,
    id: Option<String>,
    partner: Option<bool>,
}
