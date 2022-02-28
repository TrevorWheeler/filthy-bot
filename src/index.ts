require("dotenv").config();
import { Client, Intents } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import messageCreate from "./listeners/messageCreate";
import Spotify from "./Plugins/Spotify";



const client: Client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});
ready(client);
interactionCreate(client);
messageCreate(client);
client.login(process.env.NODE_ENV !== 'development' ? process.env.FILTHY_BOT_TOKEN : process.env.FILTHY_BOT_TOKEN_DEV);
Spotify();
