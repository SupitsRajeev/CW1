const addCart = document.getElementsByClassName("add-to-cart");
const cart = document.getElementById("cart-value");


for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", updateCart);
}
let cartValue = 0;
cart.innerHTML = cartValue;

function updateCart() {
  cartValue++;
  cart.innerHTML = cartValue;
  return cartValue;
}
