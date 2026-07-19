const botao = document.getElementById("inscrever");

if (botao) {
  botao.addEventListener("click", () => {
    window.location.href = "../Inscricao/inscricao.html";
  });
}

const form = document.getElementById("form-cadastro");
const successBox = document.getElementById("success-box");
const voltarBtn = document.getElementById("voltar-home");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();

    if (!nome || !email) {
      alert("Por favor, preencha nome e e-mail.");
      return;
    }

    if (successBox) {
      successBox.textContent = `Obrigado, ${nome}! Sua inscrição foi recebida com sucesso.`;
      successBox.classList.remove("hidden");
    }

    form.reset();
  });
}

if (voltarBtn) {
  voltarBtn.addEventListener("click", function() {
    window.location.href = "../Home/site.html";
  });
}