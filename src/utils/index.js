/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts : Array of Objects
 * @returns {Number} Total Price
 */
export const totalPrice = (products) => {
  return products.reduce((cont, product) => product.price + cont, 0);
};
