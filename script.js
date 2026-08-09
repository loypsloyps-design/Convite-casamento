function confirmar(){

    let nome = prompt("Digite seu nome para confirmar presença:");

    if(nome){

        alert(
        "Obrigado, " + nome + "! ❤️\n\nSua presença foi confirmada no casamento de Felipe e Asthari."
        );

    } else {

        alert("Por favor, informe seu nome.");

    }

}



function naoVou(){

    let nome = prompt("Digite seu nome:");

    if(nome){

        alert(
        "Obrigado pelo retorno, " + nome + ". Sentiremos sua falta, mas agradecemos o carinho ❤️"
        );

    } else {

        alert("Resposta registrada.");

    }

}
