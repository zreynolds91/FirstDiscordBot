const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

var prefix = '!';
client.on('ready',() => {
  console.log('Hello World! Is anyboty out there?');
});

client.on('message', message => {
  //Save the timestamp here for most accurate ping measurement.
  var timestamp = Date.now();

  // If it is a message from the bot, ignore it.
  if(message.author.bot) return;

  let command = message.content.split(' ')[0];
  let args = message.content.split(' ').slice(1);
  let argString = args.join(' ');

  // If the message does not start with the prefix, ignore it.
  if(!message.content.startsWith(prefix)) return;

  if(command === prefix +'ping') {
    message.channel.send(timestamp - message.createdTimestamp + ' ms');
  }
});

client.login(settings.token);
