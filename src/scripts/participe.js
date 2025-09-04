document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const formData = {
      nome: name,
      email: email,
      mensagem: message,
      enviadoEm: new Date().toLocaleString("pt-BR"),
    };

    console.log("--- Dados do Formulário Recebidos ---");
    console.log(formData);

    alert("Obrigado pelo seu contato! Sua mensagem foi enviada com sucesso.");

    contactForm.reset();
  });
});
