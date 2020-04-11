export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}
export function addToCartSucess(event) {
  return {
    type: '@cart/ADD_SUCESS',
    event,
  };
}
export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}
export function updateAmountRequest(id, amount, name) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
    name,
  };
}
export function updateAmountSucess(id, amount, name) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount,
    name,
  };
}
export function paySucess() {
  return {
    type: '@cart/PAY_SUCESS',
  };
}
