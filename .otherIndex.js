var fs = require("fs");
var colors = require("colors");
var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

// emitter.on("writeFile", function(file, contentToWrite) {
//   fs.writeFile(file, contentToWrite, function(err) {
//     if (err) throw err;
//     console.log("Zapisano!".blue);
//   });
// });

// emitter.on("readFile", function(file, info) {
//   fs.readFile(file, "utf-8", function(err, data) {
//     console.log(info .blue);
//     console.log(data);
//   });
// });

// emitter.emit("readFile", "./text.txt", "Dane przed zapisem!");
// emitter.emit("writeFile", "./text.txt", "A tak wyglądają po zapisie.");
// emitter.emit("readFile", "./text.txt", "Dane po zapisie");

// fs.readFile("./text.txt", "utf-8", function(err, data) {
//   console.log("Dane przed zapisem!".blue);
//   console.log(data);
//   fs.appendFile("./text.txt", "\nA tak wyglądają po zapisie.", function(err) {
//     if (err) throw err;
//     console.log("Zapisano!".blue);
//     fs.readFile("./text.txt", "utf-8", function(err, data) {
//       console.log("Dane po zapisie".blue);
//       console.log(data);
//     });
//   });
// });
fs.readdir("./", function(err, files) {
  console.log("Reading directory content".blue);
  console.log(files);
  fs.writeFile("./text.txt", files, function(err) {
    if (err) throw err;
    console.log("Data wrote! to ./text.txt" .blue);
  });
});
