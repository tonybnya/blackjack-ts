"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBet = exports.getBalance = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Utility functions
const getBalance = (winOrLost, funds = 100) => {
    return funds + winOrLost;
};
exports.getBalance = getBalance;
const getBet = (balance) => {
    while (true) {
        const prompt = (0, prompt_sync_1.default)();
        const bet = prompt("Enter you bet: $");
        const betNumber = Number(bet);
        if (betNumber > 0 && betNumber <= balance) {
            return betNumber;
        }
        console.log("Invalid bet.");
    }
};
exports.getBet = getBet;
