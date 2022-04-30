module.exports = {
	name: 'interactionCreate',
	async execute(client, interaction) {

		if (!interaction.isCommand()) return;
    const command = client.slsCmds.get(interaction.commandName);
    if (!command) return;
    // console.log("cmd trigged");
    try {
        await command.execute(interaction);
    } catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }

	},
};