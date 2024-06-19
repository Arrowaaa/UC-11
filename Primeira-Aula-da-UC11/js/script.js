// let carrinho = [];
// let total = 0;

// function addCarrinho(produto, valor) {
//     let fim = false;
//     for (let i = 0; i < carrinho.length; i++) {
//         if (carrinho[i].produto === produto) {
//             carrinho[i].qtd++;
//             fim = true;
//             break;
//         }
//     }
//     if (!fim) {
//         carrinho.push({ produto, valor, imagem, qtd: 1 }); // a função push é para puxar as informação do carrinho
//     }
//     atualizaCarrinho();
// }

// function removeItemCarrinho(index) { //Função para remover itens de carrinho.

//     carrinho.splice(index, 1);
//     atualizaCarrinho();
// }

// // function removeItemCarrinho(index) { Outra forma para remover itens de carrinhos de compras.
// //     total -= carrinho[index].valor * carrinho[index].qtd; 
// //     carrinho.splice(index, 1);
// //     atualizaCarrinho();
// // }

// function atualizaCarrinho() {
//     const cartItens = document.getElementById('carrinho-itens');
//     cartItens.innerHTML = '';
//     total = 0;
//     carrinho.forEach((item, index) => {
//         total += item.valor * item.qtd;
//         cartItens.innerHTML += `
//             <div class="carrinho-item">
//                 <img src="${item.imagem}" alt="${item.produto}" class="carrinho-img">
//                 <span>${item.produto} (X ${item.qtd})</span>
//                 <span>R$ ${item.valor * item.qtd}</span>
//                 <button onClick="removeItemCarrinho(${index})">Remover</button>
//             </div>
//         `;
//     });
//     document.getElementById('carrinho-total').innerText = total;
// }

// function fecharPedido(){ // função para fechar a comprar e emitir um alerta para se a compra for bem sucedida ou não.
//     if(carrinho.length == 0){
//         alert(`Seu Carrinho Está Vazio`);
//         return;
//     }
//     alert(`Compra Finalizada! Total: R$ ${total}`);
//     carrinho = [];
//     atualizaCarrinho;

// }



let carrinho = [];
let total = 0;

function addCarrinho(produto, valor, imagem) {
    let fim = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].produto === produto) {
            carrinho[i].qtd++;
            fim = true;
            break;
        }
    }
    if (!fim) {
        carrinho.push({ produto, valor, imagem, qtd: 1 });
    }
    atualizaCarrinho();
}

function removeItemCarrinho(index) {
    carrinho.splice(index, 1);
    atualizaCarrinho();
}

function atualizaCarrinho() {
    const cartItens = document.getElementById('carrinho-itens');
    cartItens.innerHTML = '';
    total = 0;
    carrinho.forEach((item, index) => {
        total += item.valor * item.qtd;
        cartItens.innerHTML += `
            <div class="carrinho-item">
                <img src="${item.imagem}" alt="${item.produto}" class="carrinho-img">
                <span>${item.produto} (X ${item.qtd})</span>
                <span>R$ ${item.valor * item.qtd}</span>
                <button onClick="removeItemCarrinho(${index})">Remover</button>
            </div>
        `;
    });
    document.getElementById('carrinho-total').innerText = total;
}

function fecharPedido() {
    if (carrinho.length == 0) {
        alert(`Seu Carrinho Está Vazio`);
        return;
    }
    alert(`Compra Finalizada! Total: R$ ${total}`);
    carrinho = [];
    atualizaCarrinho();
}
