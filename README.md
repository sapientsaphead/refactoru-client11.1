RefactorU-Client11
==================

CLIENT11: Restaurant Objects
Objective
Define several constructors.

Resources
Introduction to Object-Oriented JavaScript
Eloquent Javascript Ch8 - Object-Oriented Programming
Requirements
Part I

Define constructors for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
FoodItem
name
calories
vegan
glutenFree
citrusFree
Indicate the desired type of each property in a comment above the constructor.
Add a toString method that returns the FoodItem's properties in a human-readable format.
Instantiate three different FoodItems and print out each of their properties using the the method you just created.
Part II

Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
Drink
name
description
items
Plate
name
description
price
items
Order
plates
Menu
plates
Restaurant
name
description
menu
Customer
dietaryPreference
Indicate the desired type of each property in a comment above each constructor.
Add a toString method that returns each object's properties in a human-readable format. Intelligently reuse the toString method of the contained objects. (e.g. the Plate object should call toString on its FoodItems).
Add methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
isVegan
isGlutenFree
isCitrusFree
Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
Instantiate a Menu that contains each of the instantiated Plates and Drinks.
Instantiate a Restaurant that contains the instantiated Menu.
Call the Restaurant's toString method to have it print out all its information
