require('dotenv').config();
const { Player } = require('discord-player');
// const config = require('./config.js');
const { Client, Intents, Collection } = require('discord.js');
// const mongoose = require("mongoose");
const colors = require("colors");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        // Intents.FLAGS.GUILD_BANS,
        // Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        // Intents.FLAGS.GUILD_INTEGRATIONS,
        // Intents.FLAGS.GUILD_WEBHOOKS,
        // Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        // Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING]
});

client.config = require('./config');
// client.config = config;
client.player = new Player(client, client.config.opt.discordPlayer);
const player = client.player

// client.once('ready', () => {
//     console.log(`Ready! login as ${client.user.tag}`);
// });

client.commands = new Collection();
client.slsCmds = new Collection();
client.categories = require("fs").readdirSync(`./commands`);

["eventHandler", "slsCmdHandler", "cmdHandler"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    });


// require(`./handlers/slsCmdHandler`)(client);

client.login(client.config.token);