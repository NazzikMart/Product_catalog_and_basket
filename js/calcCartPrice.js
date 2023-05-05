function calcCartPrice() {
  const cartItems = document.querySelectorAll(".cart-item");
  let totalPriceEl = document.querySelector(".total-price");

  let del = document.querySelector(".delivery-cost");

  let totalPrice = 0;
  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");
    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  totalPriceEl.innerText = totalPrice;
  if (totalPrice > 20000) {
    del.classList.add("free");
    del.innerText = "Безкоштовно";
  } else if (totalPrice < 20000) {
    del.classList.remove("free");
    del.innerText = "250 грн";
  }
}
