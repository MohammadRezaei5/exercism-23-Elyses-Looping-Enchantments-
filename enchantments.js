// look back again and again, read more ...

// const cardType = 3;

function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach((needle) => {
    count += needle === card ? 1 : 0;
  });
  return count;
}

// console.log(cardTypeCheck([1, 2, 3, 4], cardType));

///---///

function determineOddEvenCards(stack, type) {
  const rest = type ? 0 : 1;

  let count = 0;

  for (const card of stack) {
    if (card % 2 === rest) {
      count += 1;
    }
  }
  return count;
}

// console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
// console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
