const fs = require('fs');

module.exports = (client) => {
  const files = fs.readdirSync("./commands").forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
    // console.log("loading...");
    for (let file of commands) {
      let cmd = require(`../commands/${dir}/${file}`);
      if (cmd.name) {
        // console.log(cmd.name);
        client.commands.set(cmd.name, cmd);
        delete require.cache[require.resolve(`../commands/${dir}/${file}`)];
      }
    }
  })
  console.log(`Loaded ${client.commands.size} commands`);
};