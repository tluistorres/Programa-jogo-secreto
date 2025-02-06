function iniciarJogo() {
    alert('Boas vindas ao jogo: advinhe o número secreto - Família Lima Tôrres!');
    
    let nomeJogador;
    // Solicita o nome do jogador até que um nome válido seja fornecido
    while (true) {
        nomeJogador = prompt('Qual é o seu nome?');
        // Verifica se o nome contém apenas letras
        if (/^[a-zA-Z]+$/.test(nomeJogador)) {
            break; // Sai do loop se o nome for válido
        } else {
            alert('Por favor, insira um nome válido (apenas letras).');
        }
    }

    alert(`Bem-vindo, ${nomeJogador}!`);
    
    let numeroSecreto = parseInt(Math.random() * 100 + 1);
    console.log(numeroSecreto);
    let chute;
    let tentativas = 1;

    // enquanto chute não for igual ao n.s.
    while (chute != numeroSecreto) {
        chute = parseInt(prompt('Escolha um número entre 1 e 100')); // Converte o chute para número

        // Verifica se o chute está dentro do intervalo
        if (isNaN(chute) || chute < 1 || chute > 100) {
            alert('Por favor, escolha um número entre 1 e 100.');
            continue; // Volta para o início do loop
        }

        // se chute for igual ao número secreto
        if (chute === numeroSecreto) {
            break;
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
            tentativas++;
        }
    }

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns, ${nomeJogador}! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

    // Pergunta se o usuário quer jogar novamente
    let jogarNovamente = confirm('Você gostaria de jogar novamente? Por favor , vamos jogar! Eu sou um robô e adoro jogar com vocês!');
    if (jogarNovamente) {
        iniciarJogo(); // Reinicia o jogo
    }
}

// Inicia o jogo pela primeira vez
iniciarJogo();