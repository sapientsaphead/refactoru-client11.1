// Filter function
var filter = function(arr, f) {
	var output = [];

	for(var i=0; i<arr.length-1; i++) {
	if( f(arr[i]) ) {
		output.push(arr[i]);
		}
	}
	return output;
};

// Supplant function

/** Performs string interpolation. */
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

/** Performs string interpolation. */
if (!String.prototype.supplant2) {
    String.prototype.supplant2 = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o,
                    parts = b.split(".");
                for (var i=0; r && i<parts.length; i++)
                    r = r[parts[i]];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

//Remove Falsey Values
function removeFalseyImpure (arr) {
    //create empty array to store truthy values to return
    var output = [];

    //loop through each item in the array
    for(var i=0, len=arr.length; i<len; i++){

        //check if the array item is truthy
        if(arr[i]) {

            //if so, push it to the output array
            output.push(arr[i]);
        }
    }
    return output;
}




