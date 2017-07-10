const seconds = ["seconds", "s"];
const minutes = ["minutes", "m"];
const hours = ["hours", "h"];
const timeIntervals = seconds.concat(minutes).concat(hours);

var killTimer = function(timerObj) {
  timerObj.unref();
}

module.exports.run = function(client, message, args) {

  //TODO: add check to make sure the total delay in milliseconds is not over
  // the size of an int.

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
    let multiplier = 1000;
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

    let time = multiplier * args[0];

    var timerObj = setInterval(() => {
      var argArr = args;
      var reminderMessage = argArr.splice(2).join(' ');
      if(null != reminderMessage && "" != reminderMessage) {
        message.channel.send(reminderMessage);
      }
      else {
        message.reply("Time is up!");
      }
      clearInterval(timerObj);
    }, time);

  }
};
