const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/second.txt", "utf-8");

const newMessage = writeFileSync(
  "./content/new-message.txt",
  "Hello, this is new message!"
);
