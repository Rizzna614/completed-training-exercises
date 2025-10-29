//You have a shopping cart represented as an array of objects:
let cart = [
  { name: "Apple", price: 1.2, quantity: 5 },
  { name: "Milk", price: 2.5, quantity: 2 },
  { name: "Bread", price: 1.8, quantity: 1 }
];

//Write a function getCartTotal(cart) that returns the total price.

function getCartTotal (cart) 
{
   let CartTotal = 0;
   
    for (i = 0; i < cart.length; i++) 
   {
        CartTotal = CartTotal + cart[i].price * cart[i].quantity
   }

   return CartTotal
};


console.log("Kopējā summa: " + getCartTotal(cart) + " EUR");