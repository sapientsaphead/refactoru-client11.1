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

	//rework this calling the object key name instead of using text.
	// also would be awesome to create format text function to capitalize and lowercaps as needed and add line breaks, etc.


	FoodItem.prototype.toString = function() {
		var dietaryRestrictions = this.foodFeatures();
		var foodItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' has ' + this.calories + ' calories. ' + dietaryRestrictions.join('. ') + '.');
		return foodItem;
	};

	

	var chocolateCake = new FoodItem('Death by Chocolate Cake', 650, false, true, true);
	
	// for (key in chocolateCake){
	// 	console.log(key, chocolateCake[key])
	// }
	// console.log("Food Item", chocolateCake.toString());


	// Part II

	// 1. & 2. Define constructors, add paramters for given properties and add them as instance variables 
	// & indicate desired type of each property.


	// name = string, description = string, items = array of objects, price = number, 
	// plates = array of objects, dietaryPreference = string or array of boolean values

	var allDrinks = [];
	var allPlates = [];

	var Drink = function(name, description, price, items){
		this.name = name;
		this.description = description;
		this.price = price;
		this.items = items;
		allDrinks.push(this);
	};
	var Plate = function(name, description, price, items){
		this.name = name;
		this.description = description; 
		this.price = price; 
		this.items = items; 
		allPlates.push(this);
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
	
	// Food Items:

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
	var tamarind = new FoodItem('tamarind', 56, true, true, true);
	var grilledveggies = new FoodItem('grilled veggies', 78, true, true, true);


	// Drinks: 
	var margaritaDrink = new Drink('Margarita', 'Made with freshly squeezed limes. ', 7.00, [limejuice, tequila, triplesec]);
	var tamarindMargaritaDrink = new Drink('Tamarind Margarita', 'Marg with a tamarind twist. ', 9.00, [tamarind, tequila, triplesec]);
	
	// Plates:
	var burritoPlate = new Plate('Barbacoa Burrito', 'Filled with stuff. Good stuff.', 15.00, [tortilla, barbacoa, rice, beans, cheese]);
	var veggieBurritoPlate = new Plate('Veggie Burrito', 'Filled with stuff. Good veggie stuff.', 15.00, [tortilla, grilledveggies, rice, beans, cheese]);
	var guacamolePlate = new Plate('Guacamole', 'Mashed at your table with fresh locally sourced ingredients.', 8.00, [avocado, tomato, onion, limejuice]);

	// Menu:
	var myMenu = new Menu([margaritaDrink, burritoPlate, guacamolePlate]);

	// Restaurant:
	var myRestaurant = new Restaurant('Mi Comidita', 'The restaurant where you eat what I want to eat.', myMenu.plates);


	// Dietary preferences tests:

	Plate.prototype.isGlutenFree = function(){
		for (var i=0; i<this.items.length; i++){
			if (this.items[i].glutenFree === false){
				return 'Contains gluten.'; 
			}
		}
		return 'Gluten Free.';
	};

	Plate.prototype.isCitrusFree = function(){
		for (var i=0; i<this.items.length; i++){
			if (this.items[i].citrusFree === false){
				return 'Contains citrus.'; 
			}
		}
		return 'Citrus free.';
	};

	Plate.prototype.isVegan = function(){
		for (var i=0; i<this.items.length; i++){
			if (this.items[i].vegan === false){
				return 'Not Vegan'; 
			}
		}
		return 'Vegan.';
	};

	Drink.prototype.isCitrusFree = function(){
		for (var i=0; i<this.items.length; i++){
			if (this.items[i].citrusFree === false){
				return 'Contains citrus.'; 
			}
		}
		return 'Citrus free.';
	};

	Restaurant.prototype.toString = function() {
		var myRestaurant = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' - ' 
						+ this.description + this.items);
		return myRestaurant;
	};


	// Calorie counters:
	Drink.prototype.calorieCount = function(){
		var totalCalories = 0;
		for(var i=0; i<this.items.length; i++){
			totalCalories += this.items[i].calories;
		}
		return totalCalories;
	};
	Plate.prototype.calorieCount = function(){
		var totalCalories = 0;
		for(var i=0; i<this.items.length; i++){
			totalCalories += this.items[i].calories;
		}
		return totalCalories;
	};


	// toString for Drinks + Plates:
	Drink.prototype.toString = function() {
		var menuItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' - ' 
						+ this.description + ' $' + this.price + '<br><div class=description>' + this.calorieCount() + ' calories. ' + this.isCitrusFree() + '</div>');
		return menuItem;
	};

	Plate.prototype.toString = function() {
		var menuItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' - ' 
						+ this.description + ' $' + this.price + '<br><div class=description>' + this.calorieCount() + ' calories. ' + this.isVegan() + this.isGlutenFree() + this.isCitrusFree() + '</div>');
		return menuItem;
	};

	var renderMenuBox = function(){
		var menuBox = $('<div class=menuBox></div>');
		$('.menu').append(menuBox);
	};

	var renderDrinkMenu = function(){
		var drinkMenu = $('<div class=drinkMenu></div>');
		$('.menuBox').append(drinkMenu);
		var drinkHeader = $('<h2 class=drinks>Drinks</h2>');
		$('.drinkMenu').append(drinkHeader);
		var drinkList = $('<ul></ul>');
		$('.drinkMenu').append(drinkList);

	};

	var renderPlateMenu = function(){
		var plateMenu = $('<div class=plateMenu></div>');
		$('.menuBox').append(plateMenu);
		var plateHeader = $('<h2 class=plates>Plates</h2>');
		$('.plateMenu').append(plateHeader);
		var plateList = $('<ul></ul>');
		$('.plateMenu').append(plateList);
	};

	var renderAllDrinks = function(array){
		for (var i=0; i<array.length; i++){
			var listItem = $('<li class="' + i + '">' + array[i].toString() + '</li>');
			$('.drinkMenu').append(listItem);
		}
	}

	var renderAllPlates = function(array){
		for (var i=0; i<array.length; i++){
			var listItem = $('<li class="' + i + '">' + array[i].toString() + '</li>');
			$('.plateMenu').append(listItem);
		}
	}

	// var renderAllMenuItems = function(array1, array2){
	// 	var allMenuItems = [];
	// 	var allMenuItemsPrice = [];
	// 	for (var i=0; i<array1.length; i++){
	// 		allMenuItems.push(array1[i]);
	// 	}
	// 	for (var i=0; i<array2.length; i++){
	// 		allMenuItems.push(array2[i]);

	// 	} 
	// 	return allMenuItems;
	// };



	// on menu item click adds to order
	// has index but depending on box it's in refers to drink or plate
	// submit order button opens thank you for your order lightbox?

	var renderOrder = function(){
		$('.menu').on('click','li', function(){
			$(this).attr('class');
			if $(this).parent()
		})
	}


	renderMenuBox();
	renderDrinkMenu();
	renderPlateMenu();
	renderAllDrinks(allDrinks);
	renderAllPlates(allPlates);


	// var renderShoppingList = function(arr) {
	// 	// var allMenuItems = renderAllMenuItems(allDrinks,allPlates);
	// 	var names = [];
	// 	var prices = [];

	// 	names = arr.map(function(){
	// 		output = [];
	// 		for(var i=0; i<arr.length; i++){
	// 			output.push(arr[i].name);
	// 		};
	// 		return output;
	// 	});

	// 	prices = arr.map(function(){
	// 		for(var i=0; i<arr.length; i++){
	// 			prices.push(arr[i].price);
	// 		}
	// 	});

	// 	console.log("names", names);
	// 	console.log("prices", price);
	// 	//use map function so you ensure that your arrays are same order + size
	// 	//first run immediately supplant names but then use a more individual append to include prices both as strings and as value
	// 	//include total box that updates dynamically with click

	// 	var orderForm = $('<h2>Please select your order items: </h2><form>' +
	// 		'<input type="checkbox" name="{0}" value="tbd"> {0}<br>'.supplant(names) +
	// 		'<input type="checkbox" name="{1}" value="tbd"> {1}<br>'.supplant(names) +
	// 		'<input type="checkbox" name="{2}" value="tbd"> {2}<br>'.supplant(names) +
	// 		'<input type="checkbox" name="{3}" value="tbd"> {3}<br>'.supplant(names) +
	// 		'<input type="checkbox" name="{4}" value="tbd"> {4}'.supplant(names)+ 
	// 		'</form>');

	// 	$('.shoppingCart').append(orderForm);
	// };

	// $('.order-online-btn').on('click', function(){
	// 	var menuItems = renderAllMenuItems(allDrinks, allPlates);
	// 	$('.shoppingCart').addClass('active');
	// 	$('.content').addClass('hide');
		
	// 	renderShoppingList(menuItems);
	// });

	
	
	
}); //end of document
