const form = document.getElementById('form-deposito');
const nomeBeneficioario = document.getElementById('nome');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const numeroContaBeneficiario = document.getElementById('conta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = `Montante de <b>${valorDeposito.value}</b> depositado com sucesso na conta <b>${numeroContaBeneficiario.value}</b> do beneficiario <b>${nomeBeneficioario.value}</b>.`;

    formEValido = validaNome(nomeBeneficioario.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficioario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficioario.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
})

nomeBeneficioario.addEventListener('keyup', function (e) {
    console.log(e);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficioario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeBeneficioario.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
});
