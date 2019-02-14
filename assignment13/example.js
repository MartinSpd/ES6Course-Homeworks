'use strict';

/*
    Homework Assignment #13: Classes

*/
const shoppingItems = [1, 2, 2, 4, 8];
class ShoppingCart {
  constructor(items = []) {
    this.items = items;
  }

  getItems() { return this.items; }

  addItem(item, amount) {

    for (let i=0; i<amount; i++) {
      this.items.push(item);
    }
      
  }
  removeItem(item, amount) {
    
    let newItems = [];
      // delete items from array
      for (let i=0; i<this.items.length; i++) {
        if (this.items[i] == item && amount>0) {
          this.items[i] = null;
          amount -= 1;
        }
        
      }
      // creates new array
      for (let i=0;i<this.items.length;i++) {
        if (this.items[i] !== null) {
          newItems.push(this.items[i]);
        }
      }
    this.items = newItems;
  }
}

let cart = new ShoppingCart(shoppingItems);
console.log('44: ', cart.getItems());

cart.addItem(3,2);

console.log('48: ', cart.getItems());

cart.removeItem(2,2);

console.log('52: ', cart.getItems());