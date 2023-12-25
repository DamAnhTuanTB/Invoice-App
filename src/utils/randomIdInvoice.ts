export const randomIdInvoice = (existingIds: string[]) => {
  const getRandomNumber = () => Math.floor(Math.random() * 10);
  const getRandomChar = () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  let randomId;
  do {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();

    const randomChars = Array.from({ length: 4 }, getRandomChar).join("");

    randomId = `${randomNumber1}${randomNumber2}${randomChars}`;
  } while (existingIds.includes(randomId));

  return randomId.toUpperCase();
};
