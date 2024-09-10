import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      user:process.env.EMAIL_USER_TESTE,
      pass: process.env.EMAIL_PASS_TESTE,
    },
  });

export const enviarEmail = async (props:{name: string, theme: string, date: string,email:string,allMembers:any[]}) => {
  const {date,email,name,theme,allMembers} = props

  const mailOptions = {
    from:"João Felipe <j.felipe@academico.ufs.br>",
    to: email,
    subject: 'Notificação de Tema',
    replyTo:"j.felipe@academico.ufs.br",
    html: `
     <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notificação de Tema</title>
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
      <h1>Notificação de Tema</h1>
    </div>
    <div class="content">
      <h2>Olá, ${name}!</h2>
      <p>Espero que esteja tudo bem com você.</p>
      <p>Gostaría de informar que o tema que você foi sorteado(a) para apresentar é:</p>
      <p class="highlight">${theme}</p>
      <p>Você deverá preparar um resumo e apresentá-lo no grupo do WhatsApp até a próxima quarta-feira, dia ${date}.</p>
      <p>Se tiver alguma dúvida, estou à disposição.</p>

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
            ${allMembers.map(member => `
              <tr>
                <td>${member.name}</td>
                <td>${member.theme}</td>
              </tr>
            `).join('')}
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


    `,
    
  };

  try {
    console.log(`Preparando email de ${name}`)
    console.log(`Enviando email de ${name}`)
    await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
  return false
};
