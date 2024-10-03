// Main game logic
import { getBalance, getBet } from "./utils";

let balance: number = getBalance(0);

const run = (balance: number): void => {
  console.log(`Player's funds: $${balance}`);
  getBet(balance);
}

run(balance);
