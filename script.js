// Array para armazenar os conjuntos de formulário e botão de reprodução de áudio
let botoesBlocos = [];

// Array para armazenar referências aos elementos de áudio gerados dinamicamente
var audiosGerados = [];

let audioEmExecucao = false; // Adicione essa variável fora das funções

//############################################## Dó  ##########################################
// Função para criar um novo conjunto de formulário e botão de reprodução de áudio
function criarConjunto() {
    // Cria um novo ID único para o conjunto
    const conjuntoID = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto = `
        <div id="${conjuntoID}">
            <form id="form_${conjuntoID}">
                <label class="letrasLabel" for="tempo_${conjuntoID}">261,63 Hz, tempo:</label>
                <input type="number" id="tempo_${conjuntoID}" name="tempo" min="1" step="1" max="60" required>
                <button class="botaoSom" type="button" onclick="reproduzirAudio('${conjuntoID}')">Dó</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio(conjuntoID) {
    const tempoInput = document.getElementById(`tempo_${conjuntoID}`);
    const tempo = parseInt(tempoInput.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo <= 0 || tempo > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form = document.getElementById(`form_${conjuntoID}`);
    // Verifica se o formulário está preenchido
    if (!form.checkValidity()) {
        form.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio = new Audio("./Audio Piano/1_Dó_261p63Hz.mp3");
        // Define o tempo inicial de reprodução
        audio.currentTime = 0;
        // Define o tempo final de reprodução
        audio.addEventListener("timeupdate", function() {
            if (audio.currentTime >= tempo) {
                audio.pause();
            }
        });
        // Reproduz o áudio
        audio.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio.addEventListener("ended", function() {
            const index = audiosGerados.indexOf(audio);
            if (index !== -1) {
                audiosGerados.splice(index, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao2").addEventListener("click", function() {
    criarConjunto();
});
//###################################################################################

//#################################### Ré  ###############################################
function criarConjunto2() {
    // Cria um novo ID único para o conjunto
    const conjuntoID2 = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto2 = `
        <div id="${conjuntoID2}">
            <form id="form2_${conjuntoID2}">
                <label class="letrasLabel" for="tempo2_${conjuntoID2}">293,66 Hz, tempo:</label>
                <input type="number" id="tempo2_${conjuntoID2}" name="tempo2" min="1" step="1" max="60" required>
                <button class="botaoSom2" type="button" onclick="reproduzirAudio2('${conjuntoID2}')">Ré</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto2);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio2(conjuntoID2) {
    const tempoInput2 = document.getElementById(`tempo2_${conjuntoID2}`);
    const tempo2 = parseInt(tempoInput2.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo2 <= 0 || tempo2 > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form2 = document.getElementById(`form2_${conjuntoID2}`);
    // Verifica se o formulário está preenchido
    if (!form2.checkValidity()) {
        form2.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio2 = new Audio("./Audio Piano/2_Ré_293p66Hz.mp3");
        // Define o tempo inicial de reprodução
        audio2.currentTime = 0;
        // Define o tempo final de reprodução
        audio2.addEventListener("timeupdate", function() {
            if (audio2.currentTime >= tempo2) {
                audio2.pause();
            }
        });
        // Reproduz o áudio
        audio2.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio2);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio2.addEventListener("ended", function() {
            const index2 = audiosGerados.indexOf(audio2);
            if (index2 !== -1) {
                audiosGerados.splice(index2, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao3").addEventListener("click", function() {
    criarConjunto2();
});

//###################################################################################

//#################################### Mi  ###############################################
function criarConjunto3() {
    // Cria um novo ID único para o conjunto
    const conjuntoID3 = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto3 = `
        <div id="${conjuntoID3}">
            <form id="form3_${conjuntoID3}">
                <label class="letrasLabel" for="tempo3_${conjuntoID3}">329,63 Hz, tempo:</label>
                <input type="number" id="tempo3_${conjuntoID3}" name="tempo3" min="1" step="1" max="60" required>
                <button class="botaoSom3" type="button" onclick="reproduzirAudio3('${conjuntoID3}')">Mi</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto3);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio3(conjuntoID3) {
    const tempoInput3 = document.getElementById(`tempo3_${conjuntoID3}`);
    const tempo3 = parseInt(tempoInput3.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo3 <= 0 || tempo3 > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form3 = document.getElementById(`form3_${conjuntoID3}`);
    // Verifica se o formulário está preenchido
    if (!form3.checkValidity()) {
        form3.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio3 = new Audio("./Audio Piano/3_Mi_329p63Hz.mp3");
        // Define o tempo inicial de reprodução
        audio3.currentTime = 0;
        // Define o tempo final de reprodução
        audio3.addEventListener("timeupdate", function() {
            if (audio3.currentTime >= tempo3) {
                audio3.pause();
            }
        });
        // Reproduz o áudio
        audio3.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio3);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio3.addEventListener("ended", function() {
            const index3 = audiosGerados.indexOf(audio3);
            if (index3 !== -1) {
                audiosGerados.splice(index3, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao4").addEventListener("click", function() {
    criarConjunto3();
});


//###################################################################################

//#################################### Fá  ###############################################

function criarConjunto4() {
    // Cria um novo ID único para o conjunto
    const conjuntoID4 = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto4 = `
        <div id="${conjuntoID4}">
            <form id="form4_${conjuntoID4}">
                <label class="letrasLabel" for="tempo4_${conjuntoID4}">349,23 Hz, tempo:</label>
                <input type="number" id="tempo4_${conjuntoID4}" name="tempo4" min="1" step="1" max="60" required>
                <button class="botaoSom4" type="button" onclick="reproduzirAudio4('${conjuntoID4}')">Fá</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto4);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio4(conjuntoID4) {
    const tempoInput4 = document.getElementById(`tempo4_${conjuntoID4}`);
    const tempo4 = parseInt(tempoInput4.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo4 <= 0 || tempo4 > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form4 = document.getElementById(`form4_${conjuntoID4}`);
    // Verifica se o formulário está preenchido
    if (!form4.checkValidity()) {
        form4.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio4 = new Audio("./Audio Piano/4_Fá_349p23Hz.mp3");
        // Define o tempo inicial de reprodução
        audio4.currentTime = 0;
        // Define o tempo final de reprodução
        audio4.addEventListener("timeupdate", function() {
            if (audio4.currentTime >= tempo4) {
                audio4.pause();
            }
        });
        // Reproduz o áudio
        audio4.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio4);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio4.addEventListener("ended", function() {
            const index4 = audiosGerados.indexOf(audio4);
            if (index4 !== -1) {
                audiosGerados.splice(index4, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao5").addEventListener("click", function() {
    criarConjunto4();
});


//###################################################################################

//#################################### Sol  ###############################################

function criarConjunto5() {
    // Cria um novo ID único para o conjunto
    const conjuntoID5 = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto5 = `
        <div id="${conjuntoID5}">
            <form id="form5_${conjuntoID5}">
                <label class="letrasLabel" for="tempo5_${conjuntoID5}">392,00 Hz, tempo:</label>
                <input type="number" id="tempo5_${conjuntoID5}" name="tempo5" min="1" step="1" max="60" required>
                <button class="botaoSom5" type="button" onclick="reproduzirAudio5('${conjuntoID5}')">Sol</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto5);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio5(conjuntoID5) {
    const tempoInput5 = document.getElementById(`tempo5_${conjuntoID5}`);
    const tempo5 = parseInt(tempoInput5.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo5 <= 0 || tempo5 > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form5 = document.getElementById(`form5_${conjuntoID5}`);
    // Verifica se o formulário está preenchido
    if (!form5.checkValidity()) {
        form5.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio5 = new Audio("./Audio Piano/5_Sol_392Hz.mp3");
        // Define o tempo inicial de reprodução
        audio5.currentTime = 0;
        // Define o tempo final de reprodução
        audio5.addEventListener("timeupdate", function() {
            if (audio5.currentTime >= tempo5) {
                audio5.pause();
            }
        });
        // Reproduz o áudio
        audio5.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio5);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio5.addEventListener("ended", function() {
            const index5 = audiosGerados.indexOf(audio5);
            if (index5 !== -1) {
                audiosGerados.splice(index5, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao6").addEventListener("click", function() {
    criarConjunto5();
});


//###################################################################################

//#################################### Lá  ###############################################
function criarConjunto6() {
    // Cria um novo ID único para o conjunto
    const conjuntoID6 = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto6 = `
        <div id="${conjuntoID6}">
            <form id="form6_${conjuntoID6}">
                <label class="letrasLabel" for="tempo6_${conjuntoID6}">440,00 Hz, tempo:</label>
                <input type="number" id="tempo6_${conjuntoID6}" name="tempo6" min="1" step="1" max="60" required>
                <button class="botaoSom6" type="button" onclick="reproduzirAudio6('${conjuntoID6}')">Lá</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto6);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio6(conjuntoID6) {
    const tempoInput6 = document.getElementById(`tempo6_${conjuntoID6}`);
    const tempo6 = parseInt(tempoInput6.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo6 <= 0 || tempo6 > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form6 = document.getElementById(`form6_${conjuntoID6}`);
    // Verifica se o formulário está preenchido
    if (!form6.checkValidity()) {
        form6.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio6 = new Audio("./Audio Piano/6_Lá_440Hz.mp3");
        // Define o tempo inicial de reprodução
        audio6.currentTime = 0;
        // Define o tempo final de reprodução
        audio6.addEventListener("timeupdate", function() {
            if (audio6.currentTime >= tempo6) {
                audio6.pause();
            }
        });
        // Reproduz o áudio
        audio6.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio6);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio6.addEventListener("ended", function() {
            const index6 = audiosGerados.indexOf(audio6);
            if (index6 !== -1) {
                audiosGerados.splice(index6, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao7").addEventListener("click", function() {
    criarConjunto6();
});


//###################################################################################

//#################################### Sí  ###############################################
function criarConjunto7() {
    // Cria um novo ID único para o conjunto
    const conjuntoID7 = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto7 = `
        <div id="${conjuntoID7}">
            <form id="form7_${conjuntoID7}">
                <label class="letrasLabel" for="tempo7_${conjuntoID7}">493,88 Hz, tempo:</label>
                <input type="number" id="tempo7_${conjuntoID7}" name="tempo7" min="1" step="1" max="60" required>
                <button class="botaoSom7" type="button" onclick="reproduzirAudio7('${conjuntoID7}')">Sí</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto7);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio7(conjuntoID7) {
    const tempoInput7 = document.getElementById(`tempo7_${conjuntoID7}`);
    const tempo7 = parseInt(tempoInput7.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo7 <= 0 || tempo7 > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form7 = document.getElementById(`form7_${conjuntoID7}`);
    // Verifica se o formulário está preenchido
    if (!form7.checkValidity()) {
        form7.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio7 = new Audio("./Audio Piano/7_Sí_493p88Hz.mp3");
        // Define o tempo inicial de reprodução
        audio7.currentTime = 0;
        // Define o tempo final de reprodução
        audio7.addEventListener("timeupdate", function() {
            if (audio7.currentTime >= tempo7) {
                audio7.pause();
            }
        });
        // Reproduz o áudio
        audio7.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio7);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio7.addEventListener("ended", function() {
            const index7 = audiosGerados.indexOf(audio7);
            if (index7 !== -1) {
                audiosGerados.splice(index7, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao8").addEventListener("click", function() {
    criarConjunto7();
});


//###################################################################################

//#################################### dó  ###############################################
function criarConjunto8() {
    // Cria um novo ID único para o conjunto
    const conjuntoID8 = `conjunto_${botoesBlocos.length}`;
    // Cria um novo conjunto de elementos
    const novoConjunto8 = `
        <div id="${conjuntoID8}">
            <form id="form8_${conjuntoID8}">
                <label class="letrasLabel" for="tempo8_${conjuntoID8}">523,25 Hz, tempo:</label>
                <input type="number" id="tempo8_${conjuntoID8}" name="tempo8" min="1" step="1" max="60" required>
                <button class="botaoSom8" type="button" onclick="reproduzirAudio8('${conjuntoID8}')">dó</button>
            </form>
        </div>
    `;
    // Adiciona o novo conjunto à array
    botoesBlocos.push(novoConjunto8);
    // Atualiza a div minhaDiv com os conjuntos de elementos
    document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');

    // Adiciona uma quebra de linha após cada conjunto
    document.getElementById("minhaDiv").appendChild(document.createElement("br"));
}

// Função para reproduzir o áudio associado ao conjunto
function reproduzirAudio8(conjuntoID8) {
    const tempoInput8 = document.getElementById(`tempo8_${conjuntoID8}`);
    const tempo8 = parseInt(tempoInput8.value);
    // Verifica se o tempo está dentro dos limites especificados
    if (tempo8 <= 0 || tempo8 > 60) {
        alert("Por favor, insira um tempo entre 1 e 60 segundos.");
        return; // Sai da função se o tempo estiver fora dos limites
    }
    const form8 = document.getElementById(`form8_${conjuntoID8}`);
    // Verifica se o formulário está preenchido
    if (!form8.checkValidity()) {
        form8.reportValidity();
        return; // Sai da função se o formulário não estiver válido
    }
    // Verifica se há algum áudio em execução
    if (!audiosGerados.length || audiosGerados.every(audio => audio.paused)) {
        // Cria um novo elemento de áudio
        const audio8 = new Audio("./Audio Piano/8_dó_523p25.mp3");
        // Define o tempo inicial de reprodução
        audio8.currentTime = 0;
        // Define o tempo final de reprodução
        audio8.addEventListener("timeupdate", function() {
            if (audio8.currentTime >= tempo8) {
                audio8.pause();
            }
        });
        // Reproduz o áudio
        audio8.play();
        // Adiciona o áudio ao array de áudios gerados
        audiosGerados.push(audio8);
        // Adiciona um evento de fim de reprodução para remover o áudio do array
        audio8.addEventListener("ended", function() {
            const index8 = audiosGerados.indexOf(audio8);
            if (index8 !== -1) {
                audiosGerados.splice(index8, 1);
            }
        });
    }
}

// Adiciona um evento de clique ao botão "Criar Botão"
document.getElementById("botao9").addEventListener("click", function() {
    criarConjunto8();
});


//###################################################################################

//============================= Botao apagar =====================

// Adiciona um evento de clique ao botão "Apagar Último Botão"
document.getElementById("botaoApagar1").addEventListener("click", function() {
// Verifica se há elementos na array
if (botoesBlocos.length > 0) {
// Remove o último conjunto de elementos da array
botoesBlocos.pop();

// Atualiza a div minhaDiv com os conjuntos de elementos atualizados
document.getElementById("minhaDiv").innerHTML = botoesBlocos.join('');


}
});


//================================parar audios===============================
// Função para parar todos os áudios em reprodução
function pararTodosOsAudios() {
    // Itera sobre cada elemento de áudio gerado e para sua reprodução
    audiosGerados.forEach(function(audio) {
        audio.pause(); // Pausa a reprodução do áudio
        audio.currentTime = 0; // Define o tempo de reprodução como zero para reiniciar o áudio, se necessário
    });
  }
  // Adiciona um evento de clique ao botão "botaoParar"
  document.getElementById("botaoParar").addEventListener("click", function() {
    pararTodosOsAudios(); // Chama a função para parar todos os áudios
    audioEmExecucao = false;
  });
  //=============================================================================

  /*
//################################ sobre os botões de texto #################
let linhasDeTexto = [];
// adiciona ouvintes de evento de clique aos botões
mensagem.addEventListener("click", function() {
    // adiciona o texto ao array, juntamente com o índice da linha
    linhasDeTexto.push({texto: ("console.log('O programador Rafael Silva diz:Bons estudos para todos!<br>espero que este programa possa ajudar todos que precisarem de uma ferramenta<br>de manipulação de frequências sonoras. O uso é simples e instintivo,<br>basta clicar nas notas musicais, e preencher os formulários de tempo e<br>salvar as sequencias de notas clicando no botão gravar!<br>A frequência gerada pode ser ouvida clicando no botão gerado no formulário,<br>o botão Break sound serve para parar a execução de audios que estão sendo ouvidos.<br>Você poderá montar uma sequência lógica de blocos para <br>gravar em um pendrive e usar no seu xR_duíno! <br>Além dos botões das notas,ouvir frequência,break sound e gravar <br>existe o botão apagar blocos, que serve para apagar sequências criadas!<br>este programa ainda precisa de muitas<br>atualizações e melhorias!! mas acredito que um bom estudante poderá<br>superar as falhas dessa versão inicial,<br>deixei um repositório público no git hub!!<br>espero vocês por lá!! deixem seus comentários e opniões!!<br>Agora clique em apagar e boa sorte!"), indice: linhasDeTexto.length});
    // atualiza o conteúdo da div
    atualizarDiv();
  });//hello do programador
  // adiciona ouvintes de evento de clique aos botões
  botao1.addEventListener("click", function() {
    // adiciona o texto ao array, juntamente com o índice da linha
    linhasDeTexto.push({texto: ("O QUE É O xR_duíno???<br>Pode se dizer que é um Arduino caseiro feito com qualquer caixinha de som, com leitor de pendrive,<br>um pendrive, e um drive na configuração de relé sônica...<br>LÓGICA:<br>No pendrive,grava-se as notas musicais em suas devidas frequências, no formato mp3.<br>Ao reproduzir as notas musicais na caixa de som o fone deverá ser removido(ou não),<br>para que as ondas das frequências do pendrive com as gravações de audio<br>sejam usadas para manipular outros circuitos...<br>Driver de relé sônica deve ser configurado para manipulações de aparelhos ou mesmo portas lógicas... etc...<br>Considerando que a configuração de hardware funcione perfeitamente <br>a ideia seguinte será programar os audios na IDE de manipulação de dados para facilitar o manuseio de comandos...<br>Dentro da lógica de programação em blocos, A IDE deve fornecer um menu de audios,<br>nas devidas frequências em formato mp3 para serem organizados numa area de trabalho,<br>possibilitando tambem gravações de audio. Ao organizar a sequência de audios em frequencias desejadas<br>a mesma deve ser salva no pendrive para ser executado no xR_duíno.<br>Esta Tecnologia é nova no mercado, portanto drivers plug and play para dispositivos<br>sonoros ainda não estão acessiveis no mercado restando<br>as alternativas de importação do drive ou mesmo a fabricação do mesmo!!<br>No momento a lightPage informa que a tecnologia ainda está na fase da prototipagem,<br>no entanto estamos abertos a comentários e sugestões e possiveis negociações..."), indice: linhasDeTexto.length});
    // atualiza o conteúdo da div
    atualizarDiv();
  });//hello world
const botaoApagarLinha = document.querySelector("#botaoApagar1");
// seleciona a div pelo ID
const minhaDivTexto = document.querySelector("#minhaDivTexto");
 botaoApagarLinha.addEventListener("click", function() {
    // verifica se há linhas de texto
    if (linhasDeTexto.length > 0) {
      // remove a última linha do array
      linhasDeTexto.splice(linhasDeTexto.length - 1, 1);
      // atualiza o conteúdo da div
      atualizarDiv();
    }
  });
  // função para atualizar o conteúdo da div
  function atualizarDiv() {
    // define o conteúdo da div como vazio
    minhaDivTexto.innerHTML = "";
    // itera sobre o array de linhas de texto, do último para o primeiro
    for (let i = linhasDeTexto.length - 1; i >= 0; i--) {
      // adiciona cada linha de texto à div, com uma quebra de linha
      minhaDivTexto.innerHTML += linhasDeTexto[i].texto + "<br>";
    }
  }
*/