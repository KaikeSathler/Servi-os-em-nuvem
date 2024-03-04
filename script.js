function ConsultadeCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resposta => {
        if (resposta.ok){
            return resposta.json()
        }
    })
    .then(data => {
        console.log(data)
        document.getElementById('cidade').innerHTML = `cidade: <span id='valordata'>${data.localidade}</span>`;
        document.getElementById('ddd').innerHTML = `ddd:<span id='valordata'> ${data.ddd}`;
        document.getElementById('logradouro').innerHTML = `logradouro:<span id='valordata'> ${data.logradouro == "" ? "Nenhum" : data.logradouro}</span>`;
        document.getElementById('ibge').innerHTML = `ibge:<span id='valordata'> ${data.ibge}</span>`;
        document.getElementById('uf').innerHTML = `uf:<span id='valordata'> ${data.uf}</span>`;
    })
}