const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target') || interaction.user;
		const member = interaction.member;
		const msg_emb = new MessageEmbed()
			.setColor("DARK_AQUA")
			.setTitle(`${member.displayName}'s avatar`)
			.setDescription(`[png](${user.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' })})|[jpg](${user.displayAvatarURL({ size: 2048, dynamic: true, format: 'jpg' })})|[webp](${user.displayAvatarURL({ size: 2048, dynamic: true })})`)
			.setImage(user.avatarURL({ size: 2048, dynamic: true }));
		interaction.reply({ embeds: [msg_emb] });
	},
};