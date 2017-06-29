const seconds = ["seconds", "s"];
const minutes = ["minutes", "m"];
const hours = ["hours", "h"];
const timeIntervals = seconds.concat(minutes).concat(hours);

exports.run = function(client, message, args) {

  // Check for format.
  if(isNaN(args[0])
    || 0 > timeIntervals.indexOf(args[1])) {
    message.channel.send("Invalid format for command '!timer'.\n"
      + "Must be of format '!timer <number> <interval (seconds/minutes/hours)>'"
      + " <message (optional)>");
  }
  // If correct format, run timer.
  else {
    //timer
    var multiplier = 1;
    if(-1 < seconds.indexOf(args[1])) {
      multiplier *= 1;
    }
    else if (-1 < minutes.indexOf(args[1])) {
      multiplier *= 60;
    }
    else if (-1 < hours.indexOf(args[1])) {
      multiplier *= 360;
    }
    else {
      console.log("!timer command with invalid interval. Should not happen.");
    }
    message.channel.send("Timer set for " + multiplier * args[0]
      + " seconds in the future.");
  }
};
