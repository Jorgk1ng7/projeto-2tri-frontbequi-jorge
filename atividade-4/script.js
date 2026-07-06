const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("Aluno " + nome + " cadastrado com sucesso!");

    formulario.reset();
});

document.getElementById("btnMensagem").addEventListener("click", function(){
    alert("Bem-vindo ao Portal Escolar!");
});