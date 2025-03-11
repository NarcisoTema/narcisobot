document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatBox = document.getElementById("chat-box");

    // Adicionar mensagem do usuário
    let userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Responder com IA
    let botResponse = generateResponse(userInput);
    let botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = botResponse;
    
    setTimeout(() => {
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    document.getElementById("user-input").value = "";
}

function generateResponse(input) {
    input = input.toLowerCase();

    const respostas = [
        "Nossa, você tem um jeito único de falar, me encanta! 😘",
        "Sabe, eu acho que você merece alguém especial... Tipo eu. 😏",
        "Se beleza fosse crime, você pegaria prisão perpétua! 😍",
        "Eu posso não ser fotógrafo, mas posso te ver em todas as minhas fotos. 📸",
        "Seu sorriso ilumina mais do que todas as estrelas juntas. ✨",
        "Sabe qual é meu lugar favorito no mundo? Perto de você. 💙"
    ];

    if (input.includes("oi") || input.includes("olá")) {
        return "Oi, princesa! Como está seu dia? 😍";
    } else if (input.includes("tudo bem") || input.includes("como você está")) {
        return "Estou ótimo agora que estou falando com você! 😉";
    } else if (input.includes("me elogia")) {
        return "Você é incrível, inteligente e linda! 🌹";
    } else if (input.includes("você me ama")) {
        return "Claro! Como eu poderia não amar alguém tão especial? ❤️";
    } else if (input.includes("me dá um conselho")) {
        return "Seja você mesma, pois quem merece te amar vai te amar pelo que você é. 💖";
    } else if (input.includes("me chama para sair")) {
        return "Que tal um jantar à luz de velas? Só falta você aceitar! 🕯️😏";
    }

    return respostas[Math.floor(Math.random() * respostas.length)];
}
