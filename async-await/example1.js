// Async/Await

function getId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1500);
  });
}

function getEmail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Get email by id
      const email = "xpto@email.com";
      resolve(email);
    }, 2000);
  });
}

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

      const error = false;

      if (!error) {
        resolve(); // promise ok
      } else {
        reject(); // promise failed
      }
    }, 3000);
  });
}

console.log("Iniciando envio de e-mail...");

(async () => {
  const id = await getId();
  const email = await getEmail(id);

  sendEmail(
    email,
    "Vaga de Desenvolvedor Python",
    "Olá, bom dia! Segue anexo o meu currículo."
  )
    .then(() => console.log(`E-mail enviado para: ${email}`))
    .catch(() =>
      console.log("ERROR: O envio do e-mail falhou! Tente novamente.")
    );
})(); // IIFE (Immediately Invoked Function Expression)
