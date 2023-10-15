const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.html", {highWaterMark: 90000});

stream.on("data", (res) => {
  console.log(res);
});