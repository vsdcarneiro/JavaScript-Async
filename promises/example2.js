// Promise with parameters

const date = new Date();

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
        resolve({ recipient, date }); // promise ok
      } else {
        reject("O envio do e-mail falhou! Tente novamente."); // promise failed
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
  .then(({ recipient, date }) => {
    console.log(`E-mail enviado para: ${recipient}\nData: ${date}`);
  })
  .catch((error) => console.log(`ERROR: ${error}`));
