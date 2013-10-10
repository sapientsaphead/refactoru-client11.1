## Restaurant UI

#### Objective
Create a user interface for the Restaurant Objects exercise. Display a restaurant's menu and allow users to place orders.

#### Resources
* [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
* [Eloquent Javascript Ch8 - Object-Oriented Programming](http://eloquentjavascript.net/chapter8.html)
* [3 ways to define a JavaScript class] (http://www.phpied.com/3-ways-to-define-a-javascript-class/)

#### Requirements

1. Add a create method to each object. This create method should return a DOM element for that object. 
e.g.

 return $('<div class="food-item">{name}</div>'.supplant(myFoodItem));

These create methods should all be pure functions. For code reuse, you can call create methods of contained objects, just like toString was used in the previous exercise.


2. When the page loads, render a restaurant with its name and menu.
3. When the user clicks on a plate, they get the option to add it to their order.
4. Display the user's order with total price.
5. Highlight the Plates that match the user's dietary preferences.


Note: It might be a good idea to write down your design ahead of time and run it by a peer or instructor to see if it makes sound sense before beginning to implement it! Good luck and have fun!

### Bonus

Add your own unique customization to this exercise, such as an enhanced user interface, additional ordering options, or an expanded menu.