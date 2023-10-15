const EventEmitter = require("events");

const customEventEmitter = new EventEmitter();

customEventEmitter.on("response", (name, id) => {
  console.log(`data success by ${name} - ${id}`);
});

customEventEmitter.on("response", () => {
  console.log("data success-2");
});

customEventEmitter.emit("response", "Azim", 777);
