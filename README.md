## Restaurant Objects

#### Objective
Define several constructors.

#### Resources
* [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
* [Eloquent Javascript Ch8 - Object-Oriented Programming](http://eloquentjavascript.net/chapter8.html)

#### Requirements

#### Part I

1. Define constructors for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
  * FoodItem
      * name
      * calories
      * vegan
      * glutenFree
      * citrusFree
2. Indicate the desired type of each property in a comment above the constructor.
3. Add a __toString__ method that returns the FoodItem's properties in a human-readable format.
4. Instantiate three different FoodItems and print out each of their properties using the the method you just created.

#### Part II

1. Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
  * Drink
      * name
      * description
      * items
  * Plate
      * name
      * description
      * price
      * items
  * Order
      * plates
  * Menu
      * plates
  * Restaurant
      * name
      * description
      * menu
  * Customer
      * dietaryPreference
2. Indicate the desired type of each property in a comment above each constructor.
3. Add a __toString__ method that returns each object's properties in a human-readable format. Intelligently reuse the __toString__ method of the contained objects. (e.g. the Plate object should call toString on its FoodItems).
4. Add methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
  * isVegan
  * isGlutenFree
  * isCitrusFree
5. Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
6. Instantiate a Menu that contains each of the instantiated Plates and Drinks.
7. Instantiate a Restaurant that contains the instantiated Menu.
8. Call the Restaurant's __toString__ method to have it print out all its information