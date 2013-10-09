$(document).ready(function(){

	var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
		this.name = name;
		this.calories = calories;
		this.vegan = vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;
		this.foodFeatures = function(){
			var featureArray = [vegan, glutenFree, citrusFree];
			var stuff = [];
			featureArray[0] ? stuff.push('Vegan') : stuff.push('Not Vegan'); 
			featureArray[1] ? stuff.push('Gluten Free') : stuff.push('Not Gluten Free');
			featureArray[2] ? stuff.push('Citrus Free') : stuff.push('Not Citrus Free');
			return stuff;
		};
	};

	FoodItem.prototype.toString = function() {
		var dietaryRestrictions = this.foodFeatures();
		var foodItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' has ' + this.calories + ' calories. ' + dietaryRestrictions.join('. ') + '.\n');
		return foodItem;
	};

	var chocolateCake = new FoodItem('Death by Chocolate Cake', 650, false, true, true);

	chocolateCake.toString();

	// Part II

	// 1. & 2. Define constructors, add paramters for given properties and add them as instance variables 
	// & indicate desired type of each property.


	// name = string, description = string, items = array of objects, price = number, plates = no clue, dietaryPreference = string

	var Drink = function(name, description, items){
		this.name = name;
		this.description = description; 
		this.items = items; 
	};
	var Plate = function(name, description, price, items){
		this.name = name;
		this.description = description; 
		this.price = price; 
		this.items = items; 
	};
	var Order = function(plates){
		this.plates = plates; 
	};
	var Menu = function(plates){
		this.plates = plates; 
	};
	var Restaurant = function(name, description, items){
		this.name = name;
		this.description = description; 
		this.items = items;
	};
	var Customer = function(dietaryPreference){
		this.dietaryPreference = dietaryPreference;
	};

	// . Instantiate
	//var FoodItem = function (name, calories, vegan, glutenFree, citrusFree)

	var tortilla = new FoodItem('tortilla', 60, true, false, true);
	var barbacoa = new FoodItem('barbacoa', 167, false, true, true);
	var rice = new FoodItem('rice', 89, true, true, false);
	var beans = new FoodItem('beans', 75, true, true, true);
	var cheese = new FoodItem('cheese', 125, false, true, true);
	var avocado = new FoodItem('avocado', 234, true, true, true);
	var tomato = new FoodItem('tomato', 35, true, true, true);
	var limejuice = new FoodItem('lime juice', 10, true, true, false);
	var onion = new FoodItem('onion', 25, true, true, true);
	var tequila = new FoodItem('tequila', 81, true, true, true);
	var triplesec = new FoodItem('triple sec', 78, true, true, true);

	var margaritaDrink = new Drink('Margarita', 'Made with freshly squeezed limes. ', [limejuice, tequila, triplesec]);

	margaritaDrink.items.toString();

	Drink.prototype.toString = function() {
		var menuItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' - ' 
						+ this.description);
		return menuItem;
	};

	// var describeMenuItem = function(item){

	// }
	// margaritaDrink.toString(); 
	// margaritaDrink.items.toString();
	console.log("My Favorite Drink is :", margaritaDrink.toString() + '\n' + margaritaDrink.items.toString());

}); //end of document
