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
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("nav--open");
      }
    });
  }

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      const whatsappNumber = "5548991077261";

      const texto = `Olá! Quero um orçamento de site.%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Mensagem:* ${mensagem}`;

      const url = `https://wa.me/${whatsappNumber}?text=${texto}`;

      window.open(url, "_blank");

      form.reset();
      feedback.textContent = "Pronto! Abrimos uma conversa no seu WhatsApp.";
      feedback.hidden = false;

      setTimeout(() => {
        feedback.hidden = true;
      }, 6000);
    });
  }
});