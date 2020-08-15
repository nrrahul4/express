const fs = require('fs');

const path = require('path');

const p = path.join(
  // eslint-disable-next-line no-undef
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  constructor() {}

  static addProduct(id, productPrice) {
    //Fetch the prev cart.
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      //Analyze the existing cart.
      let existingProductIndex = cart.products.findIndex((p) => p.id === id);
      let existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      //Add/Increase the product.
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
