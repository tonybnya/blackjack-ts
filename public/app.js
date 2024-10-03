"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main game logic
const utils_1 = require("./utils");
let balance = (0, utils_1.getBalance)(0);
const run = (balance) => {
    console.log(`Player's funds: $${balance}`);
    (0, utils_1.getBet)(balance);
};
run(balance);
