<script>
const URL_DO_SCRIPT = "COLE_AQUI_A_URL_DO_SEU_APPS_SCRIPT";

function confirmarPresenca(resposta) {

    const nome = document.getElementById("nome").value.trim();
    const resultado = document.getElementById("resultado");

    if (!nome) {
        resultado.textContent = "Digite seu nome antes de confirmar.";
        return;
    }

    resultado.textContent = "Enviando...";

    fetch(URL_DO_SCRIPT, {
        method: "POST",
        body: JSON.stringify({
            nome: nome,
            resposta: resposta
        })
    })
    .then(() => {
        resultado.textContent =
            `Obrigado, ${nome}! Sua resposta foi registrada.`;

        document.getElementById("nome").value = "";
    })
    .catch(() => {
        resultado.textContent =
            "Não foi possível enviar. Tente novamente.";
    });
}
</script>
