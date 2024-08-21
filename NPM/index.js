// package.js : Through This File You Can Directly Install required Package (if node module lost) (in command Line Just Write npm Install In perticular directory)

// package-lock.json : contains all the depenedent files Or Packages.

var figlet = require("figlet");

figlet("NISCHAY    H  R", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});