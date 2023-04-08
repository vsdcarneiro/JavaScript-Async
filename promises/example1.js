// Promise without parameters

function sendEmail(recipient, subject, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`
      De: vinicius@email.com
      Para: ${recipient}
      Assunto: ${subject}
      ------------------------------------------
      ${message}
      `);

      const error = true;

      if (!error) {
        resolve(); // promise ok
      } else {
        reject(); // promise failed
      }
    }, 5000);
  });
}

console.log("Iniciando envio de e-mail...");

sendEmail(
  "xpto@email.com",
  "Vaga de Desenvolvedor Python",
  "Olá, bom dia! Segue anexo o meu currículo."
)
  .then(() => console.log("E-mail enviado!"))
  .catch(() =>
    console.log("ERROR: O envio do e-mail falhou! Tente novamente.")
  );
