document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    // Obtem os valores do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o usuário e a senha estão corretos
    if (username === "seu_nome_de_usuario" && password === "sua_senha") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar o usuário para outra página ou executar outras ações após o login
    } else {
        alert("Usuário ou senha incorretos. Por favor, tente novamente.");
    }
});
