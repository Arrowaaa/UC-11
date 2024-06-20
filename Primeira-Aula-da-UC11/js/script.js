
let carrinho = []; // declara o arrey
let total = 0;

function addCarrinho(produto, valor, imagem) { // função para adicionar os produtos no carrinho
    let fim = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].produto === produto) {
            carrinho[i].qtd++;
            fim = true;
            break;
        }
    }
    if (!fim) {
        carrinho.push({ produto, valor, imagem, qtd: 1 });  // a função push é para puxar as informação do carrinho
    }
    atualizaCarrinho();
}

function removeItemCarrinho(index) { //Função para remover itens de carrinho.
    carrinho.splice(index, 1);
    atualizaCarrinho();
}

// // function removeItemCarrinho(index) { Outra forma para remover itens de carrinhos de compras.
// //     total -= carrinho[index].valor * carrinho[index].qtd; 
// //     carrinho.splice(index, 1);
// //     atualizaCarrinho();
// // }

function atualizaCarrinho() {  //função para atualizar os produtos adicionado no carrinho.
    const cartItens = document.getElementById('carrinho-itens');
    cartItens.innerHTML = '';
    total = 0;
    carrinho.forEach((item, index) => {
        total += item.valor * item.qtd;
        cartItens.innerHTML += `
            <div class="carrinho-item">
                <img src="${item.imagem}" alt="${item.produto}" class="carrinho-img">
                <br>
                <span>${item.produto} (X ${item.qtd})</span>
                <span>R$ ${item.valor * item.qtd}</span>
                
                <button class="btn-remover" onClick="removeItemCarrinho(${index})">Remover</button>
            </div>
            <br>
        `; 
        
    });
    document.getElementById('carrinho-total').innerText = total;
}

function fecharPedido() { // função para fechar a comprar e emitir um alerta para se a compra for bem sucedida ou não.
    if (carrinho.length == 0) {
        alert(`Seu Carrinho Está Vazio`);
        return;
    }
    alert(`Compra Finalizada! Total: R$ ${total}`);
    carrinho = [];
    atualizaCarrinho();
}
