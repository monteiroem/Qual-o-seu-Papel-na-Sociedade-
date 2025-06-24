const quizData = [
  {
    pergunta: "Qual ação você prioriza no seu dia a dia?",
    opcoes: ["Reduzir lixo", "Apoiar artistas locais", "Promover igualdade social"],
    pontuacoes: ["ambiente", "cultura", "social"]
  },
  {
    pergunta: "Em qual projeto você mais gostaria de se envolver?",
    opcoes: ["Mutirão de limpeza", "Festa comunitária tradicional", "Campanha de alfabetização"],
    pontuacoes: ["ambiente", "cultura", "social"]
  },
  {
    pergunta: "Que tipo de notícia mais chama sua atenção?",
    opcoes: ["Desmatamento", "Manifestações culturais", "Desigualdade de renda"],
    pontuacoes: ["ambiente", "cultura", "social"]
  },
  {
    pergunta: "Qual dessas frases você mais se identifica?",
    opcoes: ["Preservar é resistir", "Nossa cultura é nossa força", "Ninguém solta a mão de ninguém"],
    pontuacoes: ["ambiente", "cultura", "social"]
  },
  {
    pergunta: "Onde você mais gostaria de atuar?",
    opcoes: ["Parques e reservas", "Escolas de música popular", "ONGs comunitárias"],
    pontuacoes: ["ambiente", "cultura", "social"]
  }
];

let indice = 0;
let resultados = { ambiente: 0, cultura: 0, social: 0 };

const quiz = document.getElementById("quiz");
const btn = document.getElementById("next-btn");
const result = document.getElementById("result");

function carregarPergunta() {
  const q = quizData[indice];
  quiz.innerHTML = `<h2>${q.pergunta}</h2>` + q.opcoes.map((op, i) => `
    <label><input type="radio" name="resposta" value="${q.pontuacoes[i]}"> ${op}</label><br>`).join("");
}

function mostrarResultado() {
  const maisEscolhido = Object.entries(resultados).sort((a, b) => b[1] - a[1])[0][0];
  let perfil = {
    ambiente: "🌳 Você é um defensor do planeta! Suas atitudes mostram forte consciência ambiental.",
    cultura: "🎭 Você é um agente cultural! Valoriza tradições, arte e identidade do seu povo.",
    social: "🤝 Você é um mobilizador social! Está atento à justiça, equidade e inclusão."
  }[maisEscolhido];

  quiz.classList.add("hidden");
  btn.classList.add("hidden");
  result.classList.remove("hidden");
  result.innerHTML = `<h2>Resultado:</h2><p>${perfil}</p>`;
}

btn.addEventListener("click", () => {
  const selecionado = document.querySelector('input[name="resposta"]:checked');
  if (!selecionado) return alert("Por favor, selecione uma opção!");
  resultados[selecionado.value]++;
  indice++;
  if (indice < quizData.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
});

carregarPergunta();
