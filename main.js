const form = document.getElementById('novo-contato');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    // Checa se o número já foi adicionado na agenda
    if (telefones.includes(inputTelefone.value)) {
        alert(`O número de telefone ${inputTelefone.value} já foi incluído.`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}