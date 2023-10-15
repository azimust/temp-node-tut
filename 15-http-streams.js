const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./content/big.html", "utf8");
    // res.end(text);
    const streamText = fs.createReadStream("./content/big.html", "utf8");
    streamText.on("open", () => {
      streamText.pipe(res);
    });
    streamText.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
