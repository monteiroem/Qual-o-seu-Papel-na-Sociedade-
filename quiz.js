const perguntas = [
  {
    texto: "Qual ação você prioriza no seu dia a dia?",
    opcoes: ["Reduzir lixo", "Apoiar artistas locais", "Promover igualdade social"],
    valores: ["ambiente", "cultura", "social"]
  },
  {
    texto: "Onde você se sente mais à vontade?",
    opcoes: ["Em trilhas naturais", "Em eventos culturais", "Em rodas de conversa e ação social"],
    valores: ["ambiente", "cultura", "social"]
  },
  {
    texto: "O que mais te incomoda nas notícias?",
    opcoes: ["Degradação ambiental", "Desvalorização cultural", "Desigualdade social"],
    valores: ["ambiente", "cultura", "social"]
  },
  {
    texto: "Qual dessas frases te representa?",
    opcoes: ["Preservar é resistir", "Nossa cultura é nossa voz", "Juntos somos mais fortes"],
    valores: ["ambiente", "cultura", "social"]
  },
  {
    texto: "Em qual projeto você se engajaria?",
    opcoes: ["Reflorestamento urbano", "Resgate de festas populares", "Campanhas de cidadania"],
    valores: ["ambiente", "cultura", "social"]
  }
];

let passo = 0;
const pontos = { ambiente: 0, cultura: 0, social: 0 };

const quiz = document.getElementById("quiz");
const btn = document.getElementById("next-btn");
const result = document.getElementById("result");

function renderPergunta() {
  const atual = perguntas[passo];
  quiz.innerHTML = `<h2>${atual.texto}</h2>` + atual.opcoes.map((op, i) => `
    <label><input type="radio" name="resposta" value="${atual.valores[i]}"> ${op}</label>
  `).join("");
}

function mostrarResultado() {
  const mais = Object.entries(pontos).sort((a, b) => b[1] - a[1])[0][0];
  const perfis = {
    ambiente: "🌱 Você é um guardião do planeta — engajado em proteger e inspirar ações ambientais.",
    cultura: "🎨 Você é uma chama cultural — fortalece raízes e valoriza diversidade.",
    social: "🤝 Você é ponte de transformação — luta por justiça, equidade e inclusão."
  };
  quiz.classList.add("hidden");
  btn.classList.add("hidden");
  result.classList.remove("hidden");
  result.innerHTML = `<h2>Resultado:</h2><p>${perfis[mais]}</p>`;
}

btn.addEventListener("click", () => {
  const selecao = document.querySelector('input[name="resposta"]:checked');
  if (!selecao) return alert("Selecione uma opção para continuar.");
  pontos[selecao.value]++;
  passo++;
  passo < perguntas.length ? renderPergunta() : mostrarResultado();
});

renderPergunta();
