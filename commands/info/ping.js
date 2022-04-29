const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Get The Bots Latency",
  category: "info",
  syntax: "ping",

  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   */

  run: async (client, message, args) => {

    try {

      const embed = new MessageEmbed()
        .setTitle(`Pong!`)
        .setFooter({
          text: `${message.author.tag}`,
          iconURL: message.author.avatarURL()
        })
        .setColor("RANDOM")
        .setDescription(`Ping con cặc, tí bố báo lỗi cho mày fix, bố thằng đần`)
        .addField("Ping =", `${Math.abs(Date.now() - message.createdTimestamp)}ms`)
      message.channel.send({ embeds: [embed] })

    } catch (error) {
      message.channel.send("Some Error Occured");
      console.log("ERROR :: " + error)
    }

  }
}