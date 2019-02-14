
# Homework Assignment #12: Object Oriented Programming

An OOP pattern would be a better solution, when we want to "objectify" our task and 
each component taking part in this use case (including helper objects) and assign 
these objects a behaviour (methods) and properties. Both (properties and methods) 
can be inherited if we want to extend some object and create child of this object.

**Legend:**
- product - product generally,
- cart - shopping cart generally; 
- user - someone who is interacting with system, 
- UI - user interface to interact with system; 
- all words with uppercased first letter are Objects
<br /><br />

## **Example: e-shop**

**Object `ShoppingCart`**
- contains `items` to buy (an `array` of `ProductGroup`),
- can add or remove items
<br /><br />

**Object `ProductGroup`** <br />
Each product added to `ShoppingCart` is added to cart as member of `ProductGroup` object, 
- `ProductGroup` contains product with property `amount`, can increase or decreasde
amount of this product
<br /><br />

**Object `Product`**
- contains data about product in eshop
<br />

note: *to simplify this example think just about these 3 objects* <br /><br />



## **User stories**

**`Before:`**
- `Given UI And user interact with UI`
<br /><br />

**`Adding 1 item to cart:`**
- `When a Product is added to cart`
- `Then Product is added to ProductGroup object`
- `And defaultly set amount to 1`
- `Then ProductGroup object is added to ShoppingCart`
<br /><br />

**`Adding/ Removing Products in cart of same type:`**
- `Given Product in ProductGroup in ShoppingCart object`
- `When user in/de-creases amount of same product`
- `Then ProductGroup object is searched in ShoppingCart`
- `And ProductGroup object's amount is updated to new value`
<br /><br />
 
**`Removing item from ShoppingCart:`**
- `Given a ProductGroup for a Product is in cart`
- `When user clicks to remove product from cart`
- `Then ProductGroup is deleted from ShoppingCart`
<br /><br />

**`Empty ShoppingCart:`**
- `Given ProductGroups in cart`
- `When user clicks button to empty cart`
- `Then All ProductGroups are deleted from ShoppingCart`
<br /><br />


## **Interaction**
 - these classes would be part of web-based system with own user 
   interface to interact
 - pressing button would call `POST` operation for first 2 scenarios
 - calls `DELETE` operation for removing product or emptying cart
<br /><br />

 - all data would be inserted by system - user just press button to
   add item, in/de-crease product's amount, remove product or 
   emptying cart

 - basically example of these classes are written in another home
 - assignment: 
   https://github.com/MartinSpd/ES6Course-Homeworks/blob/master/assignment13/example.js
<br /><br />

 - firstly would exist `ShoppingCart` and by pressing button to add 
 - product to cart would be `Product` fetched with data and added to
 - `ProductGroup` with `amount = 1;` this object `ProductGroup` would be 
   added to `array` products inside of `ShoppingCart`