// Callback without parameters

function sendEmail(recipient, subject, message, callback) {
  setTimeout(() => {
    console.log(`
    De: vinicius@email.com
    Para: ${recipient}
    Assunto: ${subject}
    ------------------------------------------
    ${message}
    `);
    callback();
  }, 5000);
}

console.log("Iniciando envio de e-mail...");

sendEmail(
  "xpto@email.com",
  "Vaga de Desenvolvedor Python",
  "Olá, bom dia! Segue anexo o meu currículo.",
  () => {
    console.log("E-mail enviado!");
  }
);
