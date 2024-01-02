function Cadastrar() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var valida = ValidarFormulario(nome, sobrenome);
    if (!valida) {
        alert('Informe os dados corretamente!');
        return;
    }

    localStorage.setItem('nome', nome);
    localStorage.setItem('sobrenome', sobrenome);

    alert('Informações salvas com sucesso!');

    window.location.href = "home.html?nome=" + encodeURIComponent(nome) + "&sobrenome=" + encodeURIComponent(sobrenome);
}

function ValidarFormulario(nome, sobrenome) {
    if (!nome || !sobrenome) {
        return false;
    }
    return true;
}

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function CarregarDados() {
    var nome = getParameterByName('nome');
    var sobrenome = getParameterByName('sobrenome');

    if (nome && sobrenome) {
        var nomeElement = document.querySelector('.nome');
        var sobrenomeElement = document.querySelector('.sobrenome');

        nomeElement.textContent = nome;
        sobrenomeElement.textContent = sobrenome;
    }
}

window.onload = function() {
    var nome = localStorage.getItem('nome');
    var sobrenome = localStorage.getItem('sobrenome');

    if (nome && sobrenome) {
        var nomeElement = document.querySelector('.nome');
        var sobrenomeElement = document.querySelector('.sobrenome');

        nomeElement.textContent = nome;
        sobrenomeElement.textContent = sobrenome;
    }
};

