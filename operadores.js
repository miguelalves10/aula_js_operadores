const lista = []


function listarDados() {
    const tbody = document.querySelector('#lista')
    let html = '';
    lista.forEach((valor, indice) => {
        html += `
        <tr>
                <td>${indice}</td>
                <td>${nome}</td>
                <td>
                    <button class="btn btn-danger">Excluir</button>
                </td>
            </tr>
        `
    })
    tbody.innerHTML = html;
}


function exibirQuantidade() {
    const divQuantidade = document.querySelector('#quantidade')
    divQuantidade.innerHTML = "Quantidade: " + lista.length;
}

exibirQuantidade()

const btn_salvar = document.querySelector('#btn_entrar')
btn_salvar.addEventListener('click', () => {
    const campo = document.querySelector('#nome')
    const nome = campo.value;
    if (nome !== '' && nome.length >= 3) {
        lista.push(nome)
        campo.value = '';
        exibirQuantidade()
        listarDados()
    } else {
        alert('Nome obrigatório. Deve conter no mínimo 3 caracteres')
    }
})
// colocar a função dps de 'click', pela função sem nome
// array function - tirar nome função e colocar => dps do ()

