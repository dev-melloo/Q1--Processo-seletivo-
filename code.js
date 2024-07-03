function multiplicarMatrizes(matriz1, matriz2) {
    var resultado = [[0, 0], [0, 0]];

    resultado[0][0] = matriz1[0][0] * matriz2[0][0] + matriz1[0][1] * matriz2[1][0];
    resultado[0][1] = matriz1[0][0] * matriz2[0][1] + matriz1[0][1] * matriz2[1][1];
    resultado[1][0] = matriz1[1][0] * matriz2[0][0] + matriz1[1][1] * matriz2[1][0];
    resultado[1][1] = matriz1[1][0] * matriz2[0][1] + matriz1[1][1] * matriz2[1][1];

    return resultado;
}

var matriz1 = [[2, -1], [2, 0]];
var matriz2 = [[2, 3], [-2, 1]];
var matriz3 = [[4, 0], [-1, -1]];
var matriz4 = [[-1, 3], [2, 7]];

var resultado = multiplicarMatrizes(matriz1, matriz2);
console.log("Resultado:", resultado);

var resultado2 = multiplicarMatrizes(matriz3, matriz4);
console.log("Resultado:", resultado2);