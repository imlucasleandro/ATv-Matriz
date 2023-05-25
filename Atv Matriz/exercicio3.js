function multiplicarPorDois(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const matrizResultado = [];
  
    for (let i = 0; i < linhas; i++) {
      matrizResultado[i] = [];
      for (let j = 0; j < colunas; j++) {
        matrizResultado[i][j] = matriz[i][j] * 2;
      }
    }
  
    return matrizResultado;
  }
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const resultado = multiplicarPorDois(matriz);
  console.log(resultado);
  // imprime [[2, 4, 6], [8, 10, 12], [14, 16, 18]]
    