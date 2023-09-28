const { readFile, writeFile } = require("fs");

const first = readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    return;
  }
  console.log(result);

  const second = readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      return;
    }
    console.log(result);

    const newMessage = writeFile(
      "./content/new-message-2.txt",
      "i need love",
      (err, result) => {
        if (err) {
          return;
        }
      }
    );
  });
});
