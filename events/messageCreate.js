const fs = require("fs");
const { MessageEmbed } = require("discord.js");
// const GuildSettings = require("../models/settings.js")
// const GuildCommands = require("../models/commands.js");

module.exports = {
  name: 'messageCreate',
  async execute(client, message, Discord) {
    // let storedSettings = await GuildSettings.findOne({
    //   GuildID: message.guild.id,
    // });
    // if (!storedSettings) {
    //   const newSettings = new GuildSettings({
    //     GuildID: message.guild.id,
    //   });
    //   await newSettings.save().catch((e) => {
    //     console.log(e);
    //   });
    //   storedSettings = await GuildSettings.findOne({ GuildID: message.guild.id });
    // }

    // const prefix = storedSettings.Prefix;
    const prefix = client.config.prefix;
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    if (!cmd) return;
    try {
      // if (cmd.permissions && cmd.permissions.length > 0 && !message.member.permissions.has(cmd.permissions)) {
      //   const embeds = new MessageEmbed()
      //     .setColor("RED")
      //     .setFooter({ text: "SOME ERROR OCCURED" })
      //     .setTitle("Your are not allowed to execute this command")
      //     .setDescription("You Dont Have Enough Permissons to use this command");
      //   message.reply({ embeds: [embeds]});
      //   return;
      if (cmd.permissions && cmd.permissions.length > 0 && !message.member.permissions.has(cmd.permissions)) {
        return message.reply({
          embeds: [new MessageEmbed()
            .setColor("RED")
            .setFooter({ text:"SOME ERROR OCCURED"})
            .setTitle("Your are not allowed to execute this command")
            .setDescription("You Dont Have Enough Permissons to use this command")]
        })
      }

      // let check = await GuildCommands.findOne({ GuildID: message.guild.id, })

      // if(check && check.cmds && check.cmds.includes(cmd.name)) {
      //   message.channel.send("Command Disabled")
      // }else {
      //   cmd.run(client, message, args);
      // }
      cmd.run(client, message, args);

    } catch (error) {
      console.log("ERROR: " + error)
      message.channel.send("error");
    }

  },
};