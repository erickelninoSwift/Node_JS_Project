const { log } = require("console");
const os = require("os");

const user = os.userInfo();
const { uid, username } = user;
console.log({ uid, username });
const CurrentOS = {
  OS: os.type(),
  release: os.release(),
  memory: os.totalmem() / 1000,
};
log("hello world");

console.log(` The system uptimes is ${os.uptime()}`);

log(CurrentOS);
