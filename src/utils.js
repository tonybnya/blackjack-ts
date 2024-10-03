"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBet = exports.getBalance = void 0;
var prompt_sync_1 = require("prompt-sync");
// Utility functions
var getBalance = function (winOrLost, funds) {
    if (funds === void 0) { funds = 100; }
    return funds + winOrLost;
};
exports.getBalance = getBalance;
var getBet = function (balance) {
    var prompt = (0, prompt_sync_1.default)();
    var bet = prompt("Enter you bet: $");
    var betNumber = Number(bet);
    if (betNumber > 0 && betNumber <= balance) {
        return betNumber;
    }
    console.log("Invalid bet.");
};
exports.getBet = getBet;
