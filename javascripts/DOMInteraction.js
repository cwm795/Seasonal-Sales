"use strict";

let selector = document.getElementById("seasonSelector");

selector.addEventListener("change", applyDiscount);

function applyDiscount() {
  let discountClass = event.target.value;


  [...document.getElementsByClassName("regPrice")].forEach(element => {

    element.classList.remove("isHidden");
  });


  if (discountClass) {
    [...document.getElementsByClassName("discountPrice")].forEach(element => {

      element.classList.add("isHidden");
    });

    [...document.getElementsByClassName(discountClass)].forEach(element => {
      [...element.getElementsByClassName("price")].forEach(price => {
        price.classList.toggle("isHidden");
      });
    });
  }
}
