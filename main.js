$(document).ready(function(){

	
	// Constructors
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

	var allDrinks = [];
	var allPlates = [];

	var Drink = function(name, description, price, items){
		this.name = name;
		this.description = description;
		this.price = price;
		this.items = items;
		this.isGlutenFree = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].glutenFree === false){
					return 'Contains gluten.'; 
				}
			}
			return 'Gluten Free.';
		};
		this.isVegan = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].vegan === false){
					return 'Not Vegan'; 
				}
			}
			return 'Vegan.';
		};
		this.isCitrusFree = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].citrusFree === false){
					return 'Contains citrus.'; 
				}
			}
			return ' Citrus free.'
		};
		this.calories = function(){
			var totalCalories = 0;
			for(var i=0; i<this.items.length; i++){
				totalCalories += this.items[i].calories;
			}
			return totalCalories;
		};

		allDrinks.push(this);
	};

	var Plate = function(name, description, price, items){
		this.name = name;
		this.description = description; 
		this.price = price; 
		this.items = items; 
		allPlates.push(this);
		this.isGlutenFree = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].glutenFree === false){
					return 'Contains gluten.'; 
				}
			}
			return 'Gluten Free.';
		};
		this.isVegan = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].vegan === false){
					return 'Not Vegan'; 
				}
			}
			return 'Vegan.';
		};
		this.isCitrusFree = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].citrusFree === false){
					return 'Contains citrus.'; 
				}
			}
			return ' Citrus free.'
		};
		this.calories = function(){
			var totalCalories = 0;
			for(var i=0; i<this.items.length; i++){
				totalCalories += this.items[i].calories;
			}
			return totalCalories;
		};
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
		this.order = [];
	};
	var Customer = function(dietaryPreference){
		this.dietaryPreference = dietaryPreference;
	};

	// Instantiate
	
	/// Food Items:

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


	/// Drinks: 
	var margaritaDrink = new Drink('Margarita', 'Made with freshly squeezed limes. ', 7.00, [limejuice, tequila, triplesec]);
	var tamarindMargaritaDrink = new Drink('Tamarind Margarita', 'Marg with a tamarind twist. ', 9.00, [tamarind, tequila, triplesec]);
	
	/// Plates:
	var burritoPlate = new Plate('Barbacoa Burrito', 'Filled with stuff. Good stuff.', 15.00, [tortilla, barbacoa, rice, beans, cheese]);
	var veggieBurritoPlate = new Plate('Veggie Burrito', 'Filled with stuff. Good veggie stuff.', 15.00, [tortilla, grilledveggies, rice, beans, cheese]);
	var guacamolePlate = new Plate('Guacamole', 'Mashed at your table with fresh locally sourced ingredients.', 8.00, [avocado, tomato, onion, limejuice]);

	/// Menu:
	var myMenu = new Menu([margaritaDrink, burritoPlate, guacamolePlate]);

	/// Restaurant:
	var myRestaurant = new Restaurant('Mi Comidita', 'The restaurant where you eat what I want to eat.', myMenu.plates);


	
	// to String Functions
	Restaurant.prototype.toString = function() {
		var myRestaurant = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + '<br><span class="description">' 
						+ this.description + '</span>');
		return myRestaurant;
	};

	Drink.prototype.toString = function() {
		var menuItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' - ' 
						+ this.description + ' $' + this.price + '<br><div class=information>' + this.calories() 
						+ ' calories. ' + this.isCitrusFree() + '</div>');
		return menuItem;
	};

	Plate.prototype.toString = function() {
		var menuItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' - ' 
						+ this.description + ' $' + this.price + '<br><div class=information>' + this.calories() 
						+ ' calories. ' + this.isVegan() + this.isGlutenFree() + this.isCitrusFree() + '</div>');
		return menuItem;
	};


	// HTML Rendering

	var renderRestaurantName = function(){
		var restaurantName = myRestaurant.toString();
		$('h1').append(restaurantName);
	}
	var renderMenuBox = function(){
		var menuBox = $('<div class=menuBox></div>');
		$('.menu').append(menuBox);
	};

	var renderDrinkMenu = function(){
		var drinkMenu = $('<div class=drinkMenu></div>');
		$('.menuBox').append(drinkMenu);
		var drinkHeader = $('<h2 class=drinks>Drinks</h2>');
		$('.drinkMenu').append(drinkHeader);
		var drinkList = $('<ul class="margs"></ul>');
		$('.drinkMenu').append(drinkList);

	};

	var renderPlateMenu = function(){
		var plateMenu = $('<div class=plateMenu></div>');
		$('.menuBox').append(plateMenu);
		var plateHeader = $('<h2 class=plates>Plates</h2>');
		$('.plateMenu').append(plateHeader);
		var plateList = $('<ul class="dishes"></ul>');
		$('.plateMenu').append(plateList);
	};

	var renderAllDrinks = function(array){
		for (var i=0; i<array.length; i++){
			var listItem = $('<li  class="triggerOrder" data-itemdrink="' + i + '" data-quantity="0">' + array[i].toString() + '</li>');
			$('.margs').append(listItem);
		}
	}

	var renderAllPlates = function(array){
		for (var i=0; i<array.length; i++){
			var listItem = $('<li  class="triggerOrder" data-itemfood="' + i + '" data-quantity="0">' + array[i].toString() + '</li>');
			$('.dishes').append(listItem);
		}
	}

	var renderShoppingCart = function(array) {
		$('.shoppingCart').empty();
		var list = $('<ul></ul>');
		$('.shoppingCart').append(list);
		// loop through array and for each item in array create list item
		for (var i=0; i < array.length; i++) {
			var orderItem = $('<li><span class="left">' + array[i].name + '</span><span class="right"> $' 
				+ array[i].price + '</span></li>');
			$('.shoppingCart').append(orderItem);
		}
		var totalPrice = ('<div class="totalPrice">Total Order Price:  $'+ renderTotal(myRestaurant.order) + '</div>');
		$('.shoppingCart').append(totalPrice);
	}

	var renderTotal = function(array) {
		var orderTotal = 0;
		for (var i=0; i < array.length; i++) {
			orderTotal += parseInt(array[i].price);
		}
		return orderTotal
	}
	// FUNCTIONS

	var runRestaurant = function(){
		renderRestaurantName();
		renderMenuBox();
		renderDrinkMenu();
		renderPlateMenu();
		renderAllDrinks(allDrinks);
		renderAllPlates(allPlates);
	}
	
	// EVENT HANDLERS

	// Hide & Show Cart

	$('.shoppingCart').hide();

	$(document).on('click', '.show-cart-btn', function(){
		$('.shoppingCart').show();
		var hideButton = ("<input type='button' class='hide-cart-btn btn btn-success' value='Hide Cart'>")
		$('.buttons').append(hideButton);
		$('.buttons').find('.show-cart-btn').remove();

		
	})

	$(document).on('click', '.hide-cart-btn', function(){
		$('.shoppingCart').hide();
		var showButton = ("<input type='button' class='show-cart-btn btn btn-success' value='Show Cart'>")
		$('.buttons').append(showButton);
		$('.buttons').find('.hide-cart-btn').remove();
	})

	// Add items to order
	$(document).on('click','.triggerOrder', function(){
		itemDrink = $(this).attr("data-itemdrink");
		itemFood = $(this).attr("data-itemfood");
		if (itemDrink !== undefined) {
			myRestaurant.order.push(allDrinks[itemDrink]);
		}
		if (itemFood !== undefined) {
			myRestaurant.order.push(allPlates[itemFood]);
		}
		renderShoppingCart(myRestaurant.order);
	});

	
	
	// CALLBACK
	runRestaurant();

}); //end of document