let parser = require("minimist");
let args = parser(process.argv);
console.log(typeof(args.value));
