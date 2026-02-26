document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
    });

    nav.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        nav.classList.remove("nav--open");
      }
    });
  }

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nomeInput = document.getElementById("nome");
      const emailInput = document.getElementById("email");
      const mensagemInput = document.getElementById("mensagem");

      const nome = nomeInput ? nomeInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const mensagem = mensagemInput ? mensagemInput.value.trim() : "";

      const whatsappNumber = "5548991077261";

      const texto = [
        "Olá! Quero um orçamento de site.",
        nome && `Nome: ${nome}`,
        email && `E-mail: ${email}`,
        mensagem && `Mensagem: ${mensagem}`,
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        texto
      )}`;

      window.open(url, "_blank");

      form.reset();
      feedback.textContent =
        "Pronto! Abrimos uma conversa no seu WhatsApp. Se não abriu, verifique se o navegador bloqueou a nova aba.";
      feedback.hidden = false;

      setTimeout(() => {
        feedback.hidden = true;
      }, 6000);
    });
  }
});