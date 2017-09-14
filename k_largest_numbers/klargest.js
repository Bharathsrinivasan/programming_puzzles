/*
	This program is to find k largest elements in an array. 
*/

ary = [12,5,787,1,23]; 
k = 5; 

largestAry = []; 
largestAry.length = k; 
largestAry.fill(0); 
// console.log(largestAry, ary); 

indexOf = function (e,t,n){var r=(e.length, getSortedIndex(e,t,n));return e[r]===t?r:-1}; 
getSortedIndex = function (e,t,n){for(var r=e.length,o=-1,i=n||0;r>i;)o=i+r>>1,e[o]<t?i=o+1:r=o;return i}; 

function getIndex(val) {
	for (var i = 0; i < largestAry.length; i++) {
		if(val > largestAry[i]) {
			return i; 
		}
	}
}

for (var i = 0; i < ary.length; i++) {
	
	var val = ary[i]; 
	var idx = getIndex(val); 
	
	if( idx != undefined ) { 

		largestAry.splice(idx, 0, val); 
		largestAry.length = k; 
		// console.log(idx, largestAry); 
	}

}

console.log(largestAry); 