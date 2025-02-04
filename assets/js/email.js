(function(){
    emailjs.init('H571VhgEGOneZWGGs');
 })();


document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os valores dos campos
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Configura os parâmetros para o template do EmailJS
    const params = {
        from_name: nome,
        phone: telefone,
        email: email,
        message: mensagem
    };

    // Envia o e-mail usando o EmailJS
    emailjs.send("service_a49zo4x", "template_mjdeiig", params)
        .then(function(response) {
            alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
            console.log("E-mail enviado:", response.status, response.text);

            // Atualiza a página após o envio bem-sucedido
            window.location.reload();
        }, function(error) {
            alert("Que pena, tivemos um erro ao enviar mensagem. Me chame direto no WhatsApp");
            console.error("Erro ao enviar e-mail:", error);
        });
});
