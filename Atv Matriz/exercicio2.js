function somarMatrizes(matriz1, matriz2) {
    let linhas = matriz1.length;
    let colunas = matriz1[0].length;
    let somaMatriz = [];
  
    if (linhas !== matriz2.length || colunas !== matriz2[0].length) {
      throw new Error("As matrizes não possuem a mesma dimensão.");
    }
  
    for (let i = 0; i < linhas; i++) {
      somaMatriz[i] = [];
      for (let j = 0; j < colunas; j++) {
        somaMatriz[i][j] = matriz1[i][j] + matriz2[i][j];
      }
    }
  
    return somaMatriz;
  }
  let matriz1 = [
    [1, 2],
    [3, 4]
  ];
  
  const matriz2 = [
    [5, 6],
    [7, 8]
  ];
  
  const resultado = somarMatrizes(matriz1, matriz2);
  console.log(resultado);
    