var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/enviarEmail.ts
var enviarEmail_exports = {};
__export(enviarEmail_exports, {
  enviarEmail: () => enviarEmail
});
module.exports = __toCommonJS(enviarEmail_exports);
var import_nodemailer = __toESM(require("nodemailer"));
var transporter = import_nodemailer.default.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER_TESTE,
    pass: process.env.EMAIL_PASS_TESTE
  }
});
var enviarEmail = async (props) => {
  const { date, email, name, theme, allMembers } = props;
  const mailOptions = {
    from: "Jo\xE3o Felipe <j.felipe@academico.ufs.br>",
    to: email,
    subject: "Notifica\xE7\xE3o de Tema",
    replyTo: "j.felipe@academico.ufs.br",
    html: `
     <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notifica\xE7\xE3o de Tema</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      background-color: #007bff;
      color: #ffffff;
      padding: 10px 0;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      text-align: left;
    }
    .content h2 {
      color: #007bff;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
    }
    .content .highlight {
      background-color: #e9f7ff;
      color: #007bff;
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 4px;
      display: inline-block;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #777;
    }
    .footer a {
      color: #007bff;
      text-decoration: none;
    }
    .table-container {
      margin-top: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    table, th, td {
      border: 1px solid #ddd;
    }
    th, td {
      padding: 10px;
      text-align: left;
    }
    th {
      background-color: #007bff;
      color: white;
    }
    td {
      background-color: #f9f9f9;
    }
    @media screen and (max-width: 600px) {
      .container {
        padding: 15px;
      }
      .content p {
        font-size: 14px;
      }
      .content h2 {
        font-size: 18px;
      }
      table, th, td {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Notifica\xE7\xE3o de Tema</h1>
    </div>
    <div class="content">
      <h2>Ol\xE1, ${name}!</h2>
      <p>Espero que esteja tudo bem com voc\xEA.</p>
      <p>Gostar\xEDa de informar que o tema que voc\xEA foi sorteado(a) para apresentar \xE9:</p>
      <p class="highlight">${theme}</p>
      <p>Voc\xEA dever\xE1 preparar um resumo e apresent\xE1-lo no grupo do WhatsApp at\xE9 a pr\xF3xima quarta-feira, dia ${date}.</p>
      <p>Se tiver alguma d\xFAvida, estou \xE0 disposi\xE7\xE3o.</p>

      <div class="table-container">
        <h3>Temas dos demais membros:</h3>
        <table>
          <thead>
            <tr>
              <th>Membro</th>
              <th>Tema</th>
            </tr>
          </thead>
          <tbody>
            ${allMembers.map((member) => `
              <tr>
                <td>${member.name}</td>
                <td>${member.theme}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
    <div class="footer">
      <p>Atenciosamente,</p>
      <p>Felipe Souza</p>
    </div>
  </div>
</body>
</html>


    `
  };
  try {
    console.log(`Preparando email de ${name}`);
    console.log(`Enviando email de ${name}`);
    await transporter.sendMail(mailOptions);
    console.log("Email enviado com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
  return false;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  enviarEmail
});