window.addEventListener("click", function (e) {
  let counter;
  if (
    e.target.dataset.action === "plus" ||
    e.target.dataset.action === "minus"
  ) {
    const counterWrapper = e.target.closest(".counter-wrapper");

    counter = counterWrapper.querySelector("[data-counter]");
  }
  if (e.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }
  if (e.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 0) {
      counter.innerText = --counter.innerText;
    } else if (
      e.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 0
    ) {
      e.target.closest(".cart-item").remove();

      toogleCardStatus();

      calcCartPrice();
    }
  }

  if (
    e.target.hasAttribute("data-action") &&
    e.target.closest(".cart-wrapper")
  ) {
    calcCartPrice();
  }
});
