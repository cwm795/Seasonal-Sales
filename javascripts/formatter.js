"use strict";
let dom = require("./DOMOutputter");

module.exports.formatData = (catArr, prodArr) => {
  // console.log("hello", catArr, prodArr);
  let prodsForDOM = prodArr.map(prod => {
    catArr.forEach(category => {
      if (prod.category_id === category.id) {
        prod.discountPrice = calcDiscount(prod.price, category.discount);
        prod.category = category.name;
        prod.season_discount = category.season_discount;
      }
    });
    return prod;
  });
  // console.log("prodsForDom", prodsForDOM);
  dom.displayProducts(prodsForDOM);
};

function calcDiscount(origPrice, discount) {
  return +(origPrice * (1.0 - discount)).toFixed(2);
}
