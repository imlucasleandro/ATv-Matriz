function calcularMediaMatriz(matriz) {
    let totalElementos = 0;
    let somaElementos = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        somaElementos += matriz[i][j];
        totalElementos++;
      }
    }
  
    let media = somaElementos / totalElementos;
    return media;
  }
  let matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let mediaMatriz = calcularMediaMatriz(matrizExemplo);
  console.log(mediaMatriz);  
    