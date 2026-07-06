const formularios = document.querySelectorAll("form");

formularios.forEach(form => {
    form.addEventListener("submit", function(event){
        event.preventDefault();
        alert("Formulário enviado com sucesso!");
    });
});