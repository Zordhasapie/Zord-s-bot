const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('load with Pong!'),
	async execute(interaction) {
		interaction.reply('pong');
	},
};