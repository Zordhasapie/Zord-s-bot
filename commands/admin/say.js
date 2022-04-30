module.exports = {
  name: "say",
  description: "tell me to say something",
  category: "admin",
  aliases: ["echo"],
  syntax: "say <something>",
  permissions: ["ADMINISTRATOR"],
  run: async (client, message, args) => {

    try {
      message.channel.send(`${message.content.slice(args[0].length+client.config.prefix.length)}`)
    } catch (error) {
      message.channel.send("Some Error Occured");
      console.log("ERROR :: " + error)
    }

  }
}