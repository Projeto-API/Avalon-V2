const qtdProduto = document.getElementById("quantidadeValue");

function aumentarQtd(op) {
        if (op == 'up') {
          var num = parseInt(qtdProduto.value);
            qtdProduto.value = num + 1;
        }
    }

    function diminuirQtd(op) {
        if (op == 'down') {
          var num = parseInt(qtdProduto.value);
            qtdProduto.value = num - 1;
        }
    }



