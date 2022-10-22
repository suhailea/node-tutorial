const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fsPromise = require("fs").promises;

// Function for login
const logEvents = async (message) => {
  const formatTime = `${format(new Date(), "yyyyMMdd\tHH:MM:ss")}`;
  const logedItem = `${formatTime}\t${uuid()}\t${message}`;
  console.log(logedItem);
  try {
    if(!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromise.mkdir(path.join(__dirname,"logs"))
    }
    await fsPromise.appendFile(path.join(__dirname, "logs", "events.txt"), logedItem);
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
