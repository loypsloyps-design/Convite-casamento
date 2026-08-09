/* =========================
   CONTAGEM REGRESSIVA
========================= */

const dataCasamento = new Date(2027, 0, 16, 19, 0, 0).getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const distancia = dataCasamento - agora;

    if (distancia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContagem();

setInterval(atualizarContagem, 1000);


/* =========================
   FORMULÁRIO
========================= */

const formulario = document.getElementById("formulario");

const mensagemSucesso =
    document.getElementById("mensagem-sucesso");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const presenca =
        document.querySelector(
            'input[name="presenca"]:checked'
        );

    const quantidade =
        document.getElementById("quantidade").value;

    const mensagem =
        document.getElementById("mensagem").value;

    if (!presenca) {

        alert("Por favor, informe se você irá ao casamento.");

        return;
    }


    /* =========================
       GOOGLE PLANILHAS
    ========================= */


      const urlGoogle =
    "https://script.google.com/macros/s/AKfycbxha2KkKsyUtaZlHM-kuYQQJNx0j0DzBcc8n-1ca7Ubi-z28ZvPeVHF2MID8I8PdqZQ/exec";


    fetch(urlGoogle, {

        method: "POST",

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify({

            nome: nome,
            presenca: presenca.value,
            quantidade: quantidade,
            mensagem: mensagem

        })

    })
    .then(function(resposta) {

        return resposta.json();

    })
    .then(function(resultado) {

        if (resultado.sucesso) {

            mensagemSucesso.style.display = "block";

            formulario.reset();

            mensagemSucesso.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        } else {

            alert(
                "Não foi possível enviar sua resposta. Tente novamente."
            );

            console.error(resultado.erro);

        }

    })
    .catch(function(erro) {

        console.error(erro);

        alert(
            "Ocorreu um erro ao enviar sua resposta. Tente novamente."
        );

    });

});
