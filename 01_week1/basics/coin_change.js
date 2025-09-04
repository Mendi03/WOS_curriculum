function makeChange(cents) {
  let change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  // Your logic here

  let remaining = 0;

  change.quarters = Math.floor(cents / 25);
  remaining = cents % 25;

  change.dimes = Math.floor(remaining / 10);
  remaining = remaining % 10;

  change.nickels = Math.floor(remaining / 5);
  remaining = remaining % 5;

  change.pennies = remaining;

  return change;
}

console.log(makeChange(94));

function rollDie(sides) {
  if (sides === 6) {
    return Math.floor(Math.random() * 6 + 1);
  } else if (sides === 20) {
    return Math.floor(Math.random() * 20 + 1);
  } else {
    console.log("Don't have that die");

    return -1;
  }
}

function rollsDice(dice1Sides, dice2Sides) {
  return rollDie(dice1Sides) + rollDie(dice2Sides);
}

console.log(rollDie(6));
console.log(rollDie(20));
console.log(rollsDice(6, 20));

function rollTillFound(wantedResult) {
  let count = 0;
  while (true) {
    if (rollDie(6) == wantedResult) {
      count++;
      break;
    } else {
      count++;
    }
  }

  console.log(`It took ${count} tries to get ${wantedResult}`);
}

rollTillFound(4);
