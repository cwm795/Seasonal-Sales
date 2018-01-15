"use strict";
let formatter = require('./formatter');
require('./DOMInteraction');

// XHR for categories
let categoryData = null;

const categoryReq = new XMLHttpRequest();
const parseCatData = () => {
  const catData = JSON.parse(event.target.responseText).categories;
  categoryData = catData;
  prodsReq.send();
};

categoryReq.addEventListener("load", parseCatData);
categoryReq.open("GET", "data/categories.json");
categoryReq.send();

// XHR for products
const prodsReq = new XMLHttpRequest();
const parseProdData = () => {
  const prodData = JSON.parse(event.target.responseText).products;
  formatter.formatData(categoryData, prodData);
};

prodsReq.addEventListener("load", parseProdData);
prodsReq.open("GET", "data/products.json");
