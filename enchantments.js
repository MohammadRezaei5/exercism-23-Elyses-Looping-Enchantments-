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
