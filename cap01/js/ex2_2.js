//cria referencia ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");    

//cria um "ouvinte" de evento, acionado quando o form for submetido
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value; //obtém o valor do campo inTitulo
    const duracao = Number(frm.inDuracao.value); //obtém o valor do campo inDuracao

    const horas = Math.floor(duracao / 60); //calcula a quantidade de horas
    const minutos = duracao % 60; //calcula a quantidade de minutos

    resp1.innerText = titulo //exibe as resposta
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault(); //evita envio do form
});