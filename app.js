function calcularDistancia(coordenadax, coordenaday) {

    let cuadradox = Math.pow(coordenadax, 2);
    let cuadradoy = Math.pow(coordenaday, 2);

    let sumaCuadrados = cuadradox + cuadradoy;

    let raizCuadrada = Math.sqrt(sumaCuadrados);

    return (raizCuadrada);
}

console.log(calcularDistancia(70, -50));