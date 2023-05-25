function contarElementosPares(matriz) {
    let quantidadePares = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 === 0) {
          quantidadePares++;
        }
      }
    }
  
    return quantidadePares;
  }
  let matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let quantidadePares = contarElementosPares(matrizExemplo);
  console.log(quantidadePares);  
    