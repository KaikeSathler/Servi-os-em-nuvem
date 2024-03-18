function ConsultadeCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById(
        "cidade"
      ).innerHTML = `cidade: <span id='valordata'>${data.localidade}</span>`;
      document.getElementById(
        "ddd"
      ).innerHTML = `ddd:<span id='valordata'> ${data.ddd}`;
      document.getElementById(
        "logradouro"
      ).innerHTML = `logradouro:<span id='valordata'> ${
        data.logradouro == "" ? "Nenhum" : data.logradouro
      }</span>`;
      document.getElementById(
        "ibge"
      ).innerHTML = `ibge:<span id='valordata'> ${data.ibge}</span>`;
      document.getElementById(
        "uf"
      ).innerHTML = `uf:<span id='valordata'> ${data.uf}</span>`;
    });
}

function pesquisarCNPJ(cnpj) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/${cnpj}`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request failed with status " + response.status);
      }
    })
    .then((dados) => {
      console.log(dados);
      document.getElementsByClassName("dados-content")[1].innerHTML = `
    <span>Razão social: ${dados.nome}</span><br>
    <span>Natureza jurídica: ${dados.natureza_juridica}</span><br>
    <span>Abertura: ${dados.abertura}</span><br>
    <span>Cnpj: ${dados.cnpj}</span><br>
    <span>Cep: ${dados.cep}</span><br>
    <span>Numero: ${dados.numero}</span><br>
    <span>Atividades Principais:</span>
    `;
      dados.atividade_principal.map((value, index) => {
        document.getElementsByClassName(
          "dados-content"
        )[1].innerHTML += `Código: ${value.code} | ${value.text}<br><br>`;
      });

      document.getElementsByClassName("dados-content")[1].innerHTML +=
        "<span>Atividades Secundarias:</span>";
      dados.atividades_secundarias.map((value, index) => {
        document.getElementsByClassName(
          "dados-content"
        )[1].innerHTML += `Código: ${value.code} | ${value.text}<br>`;
      });
    })

    .catch((error) => console.log("Request falhou: " + error.message));
}
