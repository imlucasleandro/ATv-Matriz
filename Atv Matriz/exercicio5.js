function verificarMatrizesIguais(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      return false;
    }
  
    for (let i = 0; i < matriz1.length; i++) {
      for (let j = 0; j < matriz1[i].length; j++) {
        if (matriz1[i][j] !== matriz2[i][j]) {
          return false;
        }
      }
    }
  
    return true;
  }
  let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(verificarMatrizesIguais(matriz1, matriz2));  
    