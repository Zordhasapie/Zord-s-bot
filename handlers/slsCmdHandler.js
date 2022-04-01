const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = (client) => {
    const cmds = fs.readdirSync("./slsCmds/").filter(f => f.split(".").pop() === "js");
    console.log(cmds.length);
    const commands = [];

    for (const file of cmds) {
        const command = require(`../slsCmds/${file}`);
        commands.push(command.data.toJSON());
        client.slsCmds.set(command.data.name, command);
    }

    client.once('ready', () => {
        const rest = new REST({
            version: '9'
        }).setToken(client.config.token);
        (async () => {

            try {
                await rest.put(
                    Routes.applicationCommands(client.user.id), {
                    body: commands
                },
                );
                console.log('Loaded Slash Commands');
            } catch (e) { console.error(e); }

        })();
    });

};