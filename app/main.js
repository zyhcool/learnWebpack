const greeter = require('./Greeter.js');
let greeterDiv = greeter();
document.querySelector("#root").appendChild(greeterDiv);