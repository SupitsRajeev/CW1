const addToCart = document.getElementsByClassName("add-to-cart");
const modal = document.getElementById("modal");
const close = document.getElementsByClassName("close")[0];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    modal.style.display = "block";
  });

  close.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
