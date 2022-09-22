let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const minNumber = numbers.reduce(function(a, b) { 
	return Math.min(a, b); 
});

console.log(minNumber);

// return Math.min(a, b); ---> retorna o menor valor entre varios elementos.