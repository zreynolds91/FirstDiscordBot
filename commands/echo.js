exports.run = function(client, message, args) {
    message.channel.send(args.join(' '));
};
