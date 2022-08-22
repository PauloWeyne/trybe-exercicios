let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const maxNumber = numbers.reduce(function(a, b) { 
	return Math.max(a, b); 
});

console.log(maxNumber);

// const maxNumber = numbers.reduce(function(a, b) { }); ---> encontra o maior elemento em um vetor numerico, comparando cada valor.
// return Math.max(a, b); ---> retorna o maior valor entre varios elementos.