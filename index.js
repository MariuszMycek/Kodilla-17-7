var fs = require("fs");
var colors = require("colors");

fs.readdir("./", function(err, files) {
  console.log("Reading directory content".blue);
  console.log(files);
  fs.writeFile("./text.txt", files, function(err) {
    if (err) throw err;
    console.log("Data wrote! to ./text.txt".blue);
  });
});
