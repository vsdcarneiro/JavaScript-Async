// Error handling in callback

function sendEmail(recipient, subject, message, callback) {
  setTimeout(() => {
    console.log(`
    De: vinicius@email.com
    Para: ${recipient}
    Assunto: ${subject}
    ------------------------------------------
    ${message}
    `);

    const error = true; // simulate error

    if (!error) {
      callback();
    } else {
      callback("O envio do e-mail falhou! Tente novamente.");
    }
  }, 5000);
}

console.log("Iniciando envio de e-mail...");

sendEmail(
  "xpto@email.com",
  "Vaga de Desenvolvedor Python",
  "Olá, bom dia! Segue anexo o meu currículo.",
  (error) => {
    if (!error) {
      console.log("E-mail enviado!");
    } else {
      console.log(`ERROR: ${error}`);
    }
  }
);
