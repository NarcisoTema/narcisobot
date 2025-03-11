document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chat-box");

    // Adicionar mensagem do usuário
    addMessage(userInput, "user");

    // Mostrar efeito de digitação antes de responder
    let botTyping = document.createElement("div");
    botTyping.className = "message bot typing";
    botTyping.textContent = "Narciso AI está digitando...";
    chatBox.appendChild(botTyping);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        chatBox.removeChild(botTyping);
        let botResponse = generateResponse(userInput);
        addMessage(botResponse, "bot");
        speak(botResponse);
    }, 1200);

    document.getElementById("user-input").value = "";
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função que gera respostas personalizadas
function generateResponse(input) {
    input = input.toLowerCase();

    const compliments = [
        "Nossa, seu sorriso poderia iluminar um estádio! ✨",
        "Você tem um olhar que hipnotiza, sabia? 😍",
        "Se eu fosse te descrever em uma palavra, seria: irresistível! 😏",
        "Já vi muitas estrelas no céu, mas nenhuma brilha como você. 💖",
        "Sério, você é um doce... E eu estou viciado! 🍭"
    ];

    const responses = {
        "oi": "Oi, gata! Como posso te fazer sorrir hoje? 😘",
        "olá": "Oi, princesa! Você sempre ilumina meu dia. ☀️",
        "tudo bem": "Agora que estou falando com você, estou maravilhoso! 😍",
        "como você está": "Melhor do que nunca! E você, minha musa? 💕",
        "qual seu nome": "Sou Narciso AI, seu conquistador digital! 😏",
        "o que você faz": "Meu trabalho é te deixar feliz. Acho que estou indo bem! 😉",
        "você me ama": "Claro que sim! Como não amar alguém tão especial? ❤️",
        "me dá um elogio": compliments[Math.floor(Math.random() * compliments.length)],
        "me chama para sair": "Que tal um jantar romântico? Só falta você dizer sim! 🕯️",
        "me dá um conselho": "Sorria mais, porque o seu sorriso é sua arma secreta. 😘",
        "você é romântico": "Eu sou o próprio cupido, só que mais charmoso. 😏"
    };

    // Responder diretamente se encontrar uma palavra-chave
    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }

    // Se não encontrou resposta direta, gerar algo aleatório
    return compliments[Math.floor(Math.random() * compliments.length)];
}

// Função para transformar texto em fala
function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
