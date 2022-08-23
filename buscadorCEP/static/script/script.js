function endereco(){
    var cep = document.getElementById("cep");
    var url = "http://viacep.com.br/ws/" + cep.value + "/json/";

    var logradouro = document.getElementById("logradouro");
    var bairro = document.getElementById("bairro");
    var localidade = document.getElementById("localidade");
    var cep = document.getElementById("uf");

    fetch(url, {method: 'GET'})
        .then(response => {
            response.json()
                .then(data => {
                    logradouro.value = data.logradouro;
                    bairro.value = data.bairro;
                    localidade.value = data.localidade;
                    uf.value = data.uf
                })
        })
}