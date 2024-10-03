"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main game logic
var utils_1 = require("./utils");
var balance = (0, utils_1.getBalance)(0);
console.log(balance);
var run = function (balance) {
    console.log("Player's funds: ".concat(balance));
};
run();
