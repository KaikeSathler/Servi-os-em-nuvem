function ConsultadeCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resposta => {
        if (resposta.ok){
            return resposta.json()
        }
    })
    .then(data => {
        console.log(data)
        document.getElementById('cidade').innerText = `cidade: ${data.localidade}`;
        document.getElementById('ddd').innerText = `ddd: ${data.ddd}`;
    })
}