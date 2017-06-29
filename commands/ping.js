exports.run = function(client, message, args) {
    message.channel.send(Date.now() - message.createdTimestamp + ' ms');
};
