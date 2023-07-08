const form = document.getElementById('form-agenda');

const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const numero = inputNumeroContato.value;
    const numeroApenasDigitos = numero.replace(/\D/g, '');
    const numeroFormatado = formatarNumero(numeroApenasDigitos);

    inputNumeroContato.value = numeroFormatado;

    if (numeros.includes(inputNumeroContato.value)) {
        alert(`Este número: ${inputNumeroContato.value} já foi adicionado a um contato.`)
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    function formatarNumero(numero) {
        const padraoTelefone = /(\d{2})(\d{4,5})(\d{4})/;
        const resultado = numero.match(padraoTelefone);
      
        if (resultado) {
          return `(${resultado[1]}) ${resultado[2]}-${resultado[3]}`;
        }
      
        return alert(`O número: ${numero} não é válido, insira o DDD.`);
      }

}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    form.reset();
}