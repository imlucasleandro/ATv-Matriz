function somarColunas(matriz) {
    let numColunas = matriz[0].length;  
    let somas = [];
  
    for (let coluna = 0; coluna < numColunas; coluna++) {
      let somaColuna = 0;
      for (let linha = 0; linha < matriz.length; linha++) {
        somaColuna += matriz[linha][coluna];
      }
      somas.push(somaColuna);
    }
  
    return somas;
  }
  let matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let somasColunas = somarColunas(matrizExemplo);
  console.log(somasColunas);  
    