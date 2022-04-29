module.exports = {
    name: "say", 
    description: "Sends Back arg[1]", 
    category: "admin", 
    aliases: ["echo"],
    syntax: "say <Any_Message>", 
    permissions: ["ADMINISTRATOR"],
      run: async (client, message, args) => {
  
        try {
          message.channel.send(`${args[0]}`)
        } catch (error) { 
          message.channel.send("Some Error Occured");
          console.log("ERROR :: " + error)
        }
  
      }
    }