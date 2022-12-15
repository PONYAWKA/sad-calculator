export const breaketBalance = (string) => {
  let acc = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") acc++;
    if (string[i] === ")") acc--;
  }
  return acc;
};
