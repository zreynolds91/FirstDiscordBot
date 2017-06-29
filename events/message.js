const settings = require('../settings.json');

module.exports = message => {
  const client = message.client;
  const prefix = settings.prefix;
  const args = message.content.split(' ');
  const command = args.shift().slice(prefix.length);

  // If the message does not begin with the prefix, ignore it.
  if(!message.content.startsWith(prefix)) return;
  // If it is a message from the bot, ignore it.
  if(message.author.bot) return;

  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, message, args);
  }
  catch (err) {
    console.log(`Command ${command} failed.\n${err.stack}`);
  }
};
