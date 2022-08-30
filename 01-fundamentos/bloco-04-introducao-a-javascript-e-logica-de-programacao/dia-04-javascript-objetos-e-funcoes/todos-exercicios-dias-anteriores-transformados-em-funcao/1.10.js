function lucroProduto(custoProduto, valorVenda) {
  let valorCustoTotal = custoProduto * 1.2;
  let lucro = valorVenda - valorCustoTotal;
  if (custoProduto >= 0 && valorVenda >= 0) {
    return 'O custo total do produto é de: ' + valorCustoTotal + ' e o lucro é de: ' + lucro;
  } else {
    return 'Erro';
  }
}

console.log(lucroProduto(100, 120));