//greetings.js
exports.sayHelloInEnglish = function() {
  return "Hello";
};
exports.sayHelloInSpanish = function() {
  return "Hola";
};

//this is identical to:
module.exports = {
  greetingOne: function() {
    return "Howdi";
  },
  greetingTwo: function() {
    return "Howzit";
  }
}

//to import these functions into a main.js file:
//
//
//var greetings = require("./greetings.js")
//we can then use:
//greetings.greetingOne();
//greetings.sayHelloInEnglish();
//etc