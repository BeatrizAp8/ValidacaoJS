//Nessa primeira parte do código vamos fazer a validação do CPF
function validacaoCPF(CPF) {
    CPF = CPF.replace(/[^\d]/g, '');
    if (CPF.length !== 11) return false;

    if (/^(\d)\1+$/.test(CPF)) return false;
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(CPF.charAt(i)) * (10 - i);
    }
    let primeirodigito = 11 - (soma % 11);
    if (primeirodigito === 10 || primeirodigito === 11) {
      primeirodigito = 0;
    }
  
    if (parseInt(CPF.charAt(9)) !== primeirodigito) return false;
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(CPF.charAt(i)) * (11 - i);
    }
    let segundodigito = 11 - (soma % 11);
    if (segundodigito === 10 || segundodigito === 11) {
      segundodigito = 0;
    }
  
    if (parseInt(CPF.charAt(10)) !== segundodigito) return false;
  
    return true;
  }
  
  
//Validação do cep
function validacaoCEP(CEP) {
    CEP = CEP.replace(/\D/g, ''); 

    if (CEP.length !== 8 || !/^\d{8}$/.test(CEP)) {
        return false;
    }

    return true;
}

//Validação de cada campo
//Utilizei a lógica de váriaveis vista na sala de aula.

function validarFormulario() {
    var Nome = document.getElementById("Nome").value;

    var Endereco = document.getElementById("Endereco").value;

    var Bairro = document.getElementById("Bairro").value;

    var CEP = document.getElementById("CEP").value;

    var Cidade = document.getElementById("Cidade").value;

    var Estado = document.getElementById("Estado").value;

    var Tel_Fixo = document.getElementById("TelefoneFixo").value;

    var Celular = document.getElementById("Celular").value;

    var RG = document.getElementById("RG").value;

    var CPF = document.getElementById("CPF").value;


    //Alerts de cada campo
    //Quando o usuário digitar e não ter nada irá apresentar uma mensagem para ele preencher o campo.
    //Caso ele preencha errado irá apresentar alguns alerts programados abaixo:

    if (Nome.length < 4 || Nome.length > 50) {
        alert("Atenção! O campo Nome deve ter no mínimo 4 a 50 caracteres.");
        return false;
    }
    if (Endereco.length < 6 || Endereco.length > 60) {
        alert("Atenção! O campo Endereço deve ter no mínimo 6 a 60 caracteres.");
        return false;
    }
    if (Bairro.length < 6 || Bairro.length > 50) {
        alert("Atenção! O campo Bairro deve ter no mínimo 6 a 50 caracteres.");
        return false;
    }
    if (CEP === "") {
        alert("Solicitamos que preencha o campo CEP.");
        return false;
    }

    // caso seja digitado errado o cep irá apresentar essa mensagem:
    if (!validacaoCEP(CEP)) {
        alert("CEP inválido.Pedimos que digite um CEP válido.");
        return false;
    }
    if (Cidade.length < 8 || Cidade.length > 100) {
        alert("Atenção! O campo Cidade deve ter mais de 3 a 100 caracteres.");
        return false;
    }
    if (Estado.length !== 2) {
        alert("Atenção! O campo Estado deve ter apenas 2 caracteres.");
        return false;
    }
    if (Tel_Fixo.length < 8 && Celular.length < 9) {
        alert("Preencha um campo de telefone fixo com 8 digitos ou celular com 9 digitos.");
        return false;
    }
    if (RG.length !== 7) {
        alert("O campo RG deve ser preenchido com 7 caracteres númericos.");
        return false;
    }
    if (CPF.length !== 11) {
        alert("O CPF deve tem exatamente 11 caracteres númericos.");
        return false;
    }

    //caso o cpf foi digitado errado irá apresentar essa mensagem:
    if (!validacaoCPF(CPF)) {
        alert("CPF está inválido. Deve ser digitado um CPF válido.");
        return false;
    }
    return true;
}


