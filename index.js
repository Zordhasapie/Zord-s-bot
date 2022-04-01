require('dotenv').config();
const config = require('./config.js');
const { Client, Intents, Collection } = require('discord.js');
const mongoose = require("mongoose");
const colors = require("colors");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.config = config;

client.once('ready', () => {
    console.log(`Ready! login as ${client.user.tag}`);
});

client.slsCmds = new Collection();
client.categories = require("fs").readdirSync(`./commands`);

["eventHandler", "slsCmdHandler"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    });
// require(`./handlers/slsCmdHandler`)(client);

client.login(config.token);