let numeros = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let sumatoria = 0;
for (let i = 0; i <= 10; i++) {
    if (i > 5) {
        sumatoria = sumatoria + i;
    }
}
console.log(sumatoria);

let numeros = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

sumatoria = (numeros.filter(elementoArray => elementoArray > 5))
    .reduce((suma, elemntoArray) => suma + elemntoArray);

console.log(sumatoria);