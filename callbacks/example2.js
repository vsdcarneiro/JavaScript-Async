// Callback with parameters

function sendEmail(recipients, subject, message, callback) {
  setTimeout(() => {
    console.log(`
    De: vinicius@email.com
    Para: ${recipients.join(", ")}
    Assunto: ${subject}
    ----------------------------------------------------
    ${message}
    `);
    callback("OK", recipients, "5s");
  }, 5000);
}

console.log("Iniciando envio de e-mails...");

sendEmail(
  ["xpte@email.com", "xpti@email.com", "xpto@email.com"],
  "Vaga de Desenvolvedor Python",
  "Olá, bom dia! Segue anexo o meu currículo.",
  (status, recipients, time) => {
    console.log("E-mails enviados!");
    console.log(
      `\nStatus: ${status}\nQuantidade de destinatários: ${recipients.length}\nTempo: ${time}`
    );
  }
);
