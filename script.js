const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();
    
    const nomeBeneficioario = document.getElementById('nome');
    const numeroContaBeneficiario = document.getElementById('conta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = `Montante de ${valorDeposito.value} depositado com sucesso na conta ${numeroContaBeneficiario.value} do beneficiario ${nomeBeneficioario.value}.`;

    formEValido = validaNome(nomeBeneficioario.value);
    if (formEValido) {
        alert(mensagemSucesso);

        nomeBeneficioario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        alert('O nome não está completo!');
    }
})

