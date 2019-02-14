'use strict';

/**
   Homework Assignment #12: OOP
   
 */


  /** SHoppingCart class */

  class ShoppingCart {
    constructor(items = []) {
      this.items = items;
    }

    getItems() { return this.items; }

    addItem(item) { this.items.push(item); }

    changeAmount(product, amount) {
      
      for (let i=0;i<this.items.length;i++) {

        const productGroup = this.items[i];

          if (productGroup.getProduct().barCode 
            === product.barCode) {

            productGroup.setAmount(amount);
            this.items[i] = productGroup;
          }
      }
    }

    removeItem(product) {
      
      let newItems = [];
      
        // set productGroup index to null
        for (let i=0;i<this.items.length;i++) {
  
          const productGroup = this.items[i];
            if (productGroup.getProduct().barCode 
              === product.barCode) {
              this.items[i] = null;
            } else { return ; }
        }
        // creates new array
        for (let i=0;i<this.items.length;i++) {
          if (this.items[i] !== null) {
            newItems.push(this.items[i]);
          }
        }
      this.items = newItems;
    }

    removeAllItems() { this.items = null; }
  }


  /** ProductGroup class */

  class ProductGroup {
    constructor(product = {}, amount = 1) {
      this.product = product;
      this.amount = amount;
    }

    getProduct() { return this.product; }

    setAmount(amount) { this.amount = amount; }

    addAmount() { this.amount += 1; }

    takeAmount() {
      if (this.amount > 1) { this.amount -= 1; }
    }

    removeProduct() {
      this.product = null;
      this.amount = 0;
    }
  }


  /** Product class */

  class Product {
    constructor(make, name, madeOn, barCode) {
      this.make = make;
      this.name = name;
      this.madeOn = madeOn;
      this.barCode = barCode;
    }

    // get & set for make, name, madeOn and barCode

    addProductToCart(amount) {
      const productGroup = new ProductGroup(this, amount);
      shoppingCart.addItem(productGroup);
    }
  }


const shoppingCart = new ShoppingCart();

const prod1 = new Product('Manufacturer', 'Model1', '2019.01.12', '123');
const prod2 = new Product('Manufacturer', 'Model2', '2019.02.05', '456');
const prod3 = new Product('Manufacturer', 'Model3', '2018.11.24', '789');
const prod4 = new Product('Manufacturer', 'Model4', '2019.01.01', '000');

prod1.addProductToCart(2);

console.log(shoppingCart.getItems());

shoppingCart.changeAmount(prod1,1);

console.log(shoppingCart.getItems());