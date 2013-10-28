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
					return false; 
				}
			}
			return true;
		};
		this.isGlutenFreeStr = function(){
			return this.isGlutenFree() ? 'Gluten Free. ' : 'Contains Gluten. ';
		}
		this.isVegan = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].vegan === false){
					return false; 
				}
			}
			return true;
		};
		this.isVeganStr = function(){
			return this.isVegan() ? 'Vegan. ' : 'Not Vegan. ';
		}
		this.isCitrusFree = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].citrusFree === false){
					return false; 
				}
			}
			return true;
		};
		this.isCitrusFreeStr = function(){
			return this.isCitrusFree() ? 'Citrus Free. ' : 'Contains Citrus. ';
		}
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
					return false; 
				}
			}
			return true;
		};
		this.isGlutenFreeStr = function(){
			return this.isGlutenFree() ? 'Gluten Free. ' : 'Contains Gluten. ';
		}
		this.isVegan = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].vegan === false){
					return false; 
				}
			}
			return true;
		};
		this.isVeganStr = function(){
			return this.isVegan() ? 'Vegan. ' : 'Not Vegan. ';
		}
		this.isCitrusFree = function(){
			for (var i=0; i<this.items.length; i++){
				if (this.items[i].citrusFree === false){
					return false; 
				}
			}
			return true;
		};
		this.isCitrusFreeStr = function(){
			return this.isCitrusFree() ? 'Citrus Free. ' : 'Contains Citrus. ';
		}
		this.calories = function(){
			var totalCalories = 0;
			for(var i=0; i<this.items.length; i++){
				totalCalories += this.items[i].calories;
			}
			return totalCalories;
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
	var myMenu = new Menu([margaritaDrink, tamarindMargaritaDrink, burritoPlate, veggieBurritoPlate, guacamolePlate]);

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
						+ ' calories. ' + this.isCitrusFreeStr() + '</div>');
		return menuItem;
	};

	Plate.prototype.toString = function() {
		var menuItem = (this.name.charAt(0).toUpperCase() + this.name.slice(1) + ' - ' 
						+ this.description + ' $' + this.price + '<br><div class=information>' + this.calories() 
						+ ' calories. ' + this.isVeganStr() + this.isGlutenFreeStr() + this.isCitrusFreeStr() + '</div>');
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
			listItem.attr('data-vegan', array[i].isVegan());
			listItem.attr('data-gf', array[i].isGlutenFree());
			listItem.attr('data-cf', array[i].isCitrusFree());

			$('.margs').append(listItem);
		}
	}

	var renderAllPlates = function(array){
		for (var i=0; i<array.length; i++){
			var listItem = $('<li  class="triggerOrder" data-itemfood="' + i + '" data-quantity="0">' + array[i].toString() + '</li>');
			listItem.attr('data-vegan', array[i].isVegan());
			listItem.attr('data-gf', array[i].isGlutenFree());
			listItem.attr('data-cf', array[i].isCitrusFree());
			$('.dishes').append(listItem);
		}
	}


	var updateQuantity = function(name, quantity){
		for (var i=0; i < myRestaurant.order.length; i++){
			if (myRestaurant.order[i].name === name) {
				if (quantity == 0) {
					myRestaurant.order.splice(i, 1);
				}
				else {
					myRestaurant.order[i].quantity = quantity;
				}
				break;
			}
		}
		renderShoppingCart(myRestaurant.order);
	}
	var itemHTML = '<tr data-name="{name}"><td class="tname">{name}</td><td class="tquantity"><input type=number value="{quantity}"><td class="tprice">${total}</td></tr>'

	var renderShoppingCart = function(array) {

		var tbody = $('.shoppingCart tbody');
		tbody.empty();
		// loop through array and for each item in array create list item
		if (array.length === 0){
			tbody.append('<tr><td colspan=3>No order items yet.</td></tr>');
			return;
		}
		for (var i=0; i < array.length; i++) {
			array[i].total = array[i].price * array[i].quantity;
			var orderItem = itemHTML.supplant(array[i]);
			tbody.append(orderItem);
		}
		var totalPrice = ('<tr class="totalprice"><td colspan=2>Total Order Price</td><td class="tprice">  $'+ renderTotal(myRestaurant.order) + '</td></tr>');
		tbody.append(totalPrice);

		// updates quantity if it is changed in the shopping cart
		tbody.find('input').change(function(){
			var name = $(this).closest('tr').attr('data-name');
			var quantity = Math.max(0,$(this).val());
			updateQuantity(name, quantity);
		})
	}

	var renderTotal = function(array) {
		var orderTotal = 0;
		for (var i=0; i < array.length; i++) {
			orderTotal += parseInt(array[i].price)*parseInt(array[i].quantity);
		}
		return orderTotal
	}


	var renderDietaryPreference = function(){
		$('.triggerOrder.highlight').removeClass('highlight');
		var str = '';
		$('.dietary-preference').each(function(){
			if ($(this).hasClass('active')){
				str += '[data-' + $(this).attr('id') + '=true]';
			}
		});
		if (str.length > 0){
			$('.triggerOrder' + str).addClass('highlight');
		}
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
	
	var addSingleItem = function(item){
		for (var i=0; i < myRestaurant.order.length; i++){
			if (myRestaurant.order[i].name === item.name) {
				myRestaurant.order[i].quantity++;
				return;
			}
		}
		var cartItem = {name: item.name, price: item.price, quantity: 1};
		myRestaurant.order.push(cartItem);
	}

	// EVENT HANDLERS

	// Hide & Show Cart

	$('.shoppingCart').hide();

	$(document).on('click', '.show-cart-btn', function(){
		var hideButton = $("<input type='button' class='hide-cart-btn btn btn-success' value='Hide Cart'>");
		$('.show-hide-cart').append(hideButton);
		$('.show-hide-cart').find('.show-cart-btn').remove();
		renderShoppingCart(myRestaurant.order);
		$('.shoppingCart').show();
	});

	$(document).on('click', '.hide-cart-btn', function(){
		$('.shoppingCart').hide();
		var showButton = $("<input type='button' class='show-cart-btn btn btn-success' value='Show Cart'>");
		$('.show-hide-cart').append(showButton);
		$('.show-hide-cart').find('.hide-cart-btn').remove();
	});


	// Add items to order
	$(document).on('click','.triggerOrder', function(){
		itemDrink = $(this).attr("data-itemdrink");
		itemFood = $(this).attr("data-itemfood");
		if (itemDrink !== undefined) {
			addSingleItem(allDrinks[itemDrink]);
		}
		else if (itemFood !== undefined) {
			addSingleItem(allPlates[itemFood]);
		}
		if ($('.shoppingCart').is(':hidden')){
			$('.show-cart-btn').trigger('click');
		}
		else renderShoppingCart(myRestaurant.order);
	});

	// Highlight items by dietary preference
	$(document).on('click', '.dietary-preference', function(){
		if ($(this).hasClass('active'))
			$(this).removeClass('active');
		else
			$(this).addClass('active');
		renderDietaryPreference();
	})

	
	
	// CALLBACK
	runRestaurant();

}); //end of document