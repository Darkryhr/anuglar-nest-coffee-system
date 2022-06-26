//* simulates the coffee machine making an order
export const makeCoffee = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return 'madeCoffee';
};
