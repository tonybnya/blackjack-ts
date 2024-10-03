import PromptSync from "prompt-sync";

// Utility functions
export const getBalance = (winOrLost: number, funds: number = 100): number => {
  return funds + winOrLost;
}

export const getBet = (balance: number): number => {
  while (true) {
    const prompt = PromptSync();
    const bet = prompt("Enter you bet: $");

    const betNumber = Number(bet);

    if (betNumber > 0 && betNumber <= balance) {
      return betNumber;
    }
    console.log("Invalid bet.");
  }
}
