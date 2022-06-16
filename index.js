//variáveis?
//dados de entrada?
//dados de saída?
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta() {
    //receber a pergunta
    //verificar se o input está preenchido
    if (inputPergunta.value == "") {
      window.alert("Digite sua pergunta")
      return //função que recebe return pára automáticamente
    }

    //guardar a pergunta como HTML
    const pergunta = "<div>" + inputPergunta.value + "</div>"
    //gerar resposta
    //gerar número aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    console.log(respostas[numeroAleatorio])
    //mostrar pergunta e resposta na tela
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
    //sumir com a resposta após alguns segundos
    
    //elementoResposta.style.opacity = 1;

    setTimeout(function(){
      elementoResposta.style.opacity = 0;
    }, 3000) //o que quero fazer + em quantos milissegundos
}










