export const isPositiveNumber = (str: string) => {
  const number = parseFloat(str);
  return !isNaN(number) && number > 0;
};
