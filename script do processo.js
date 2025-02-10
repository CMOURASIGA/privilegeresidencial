function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

function enviarSolicitacao(nome, bloco, apartamento, emailMorador, foto) {
  try {
    var emailAdmin = "atendimento@privilegeresidencial.com";
    Logger.log("Iniciando envio de email para: " + emailAdmin);
    Logger.log("Verificando se a foto foi enviada...");
    
    if (!foto) {
      Logger.log("Erro: Nenhuma foto recebida.");
      throw new Error("Nenhuma foto foi anexada à solicitação.");
    }
    
    Logger.log("Recebendo Base64 da imagem: " + foto.substring(0, 50) + "...");
    
    Logger.log("Processando anexo...");
    var anexo;
    try {
      anexo = Utilities.newBlob(Utilities.base64Decode(foto.split(",")[1]), MimeType.PNG, nome + ".png");
      Logger.log("Arquivo convertido para Blob com sucesso.");
    } catch (e) {
      Logger.log("Erro ao processar a imagem: " + e.message);
      throw new Error("Erro ao processar a imagem enviada.");
    }
    
    Logger.log("Enviando email para administração com anexo...");
    MailApp.sendEmail({
      to: emailAdmin,
      subject: "Solicitação de cadastro facial do apartamento " + apartamento + " do bloco " + bloco,
      htmlBody: "<p>Uma nova solicitação de cadastro facial foi enviada.</p>"
                + "<p><strong>Nome:</strong> " + nome + "</p>"
                + "<p><strong>Bloco:</strong> " + bloco + "</p>"
                + "<p><strong>Apartamento:</strong> " + apartamento + "</p>"
                + "<p><strong>Email do Morador:</strong> " + emailMorador + "</p>",
      attachments: [anexo]
    });
    Logger.log("Email enviado para administração com sucesso.");
    
    Logger.log("Enviando email de confirmação para morador...");
    MailApp.sendEmail({
      to: emailMorador,
      subject: "Confirmação de solicitação de cadastro facial",
      htmlBody: "<p>Olá " + nome + ",</p>"
                + "<p>Sua solicitação de cadastro facial foi recebida com sucesso.</p>"
                + "<p>Em breve, a administração entrará em contato caso precise de mais informações.</p>"
                + "<p>Atenciosamente,</p>"
                + "<p>Equipe Privilege Residencial</p>"
    });
    Logger.log("Email de confirmação enviado para morador com sucesso.");
  } catch (e) {
    Logger.log("Erro ao enviar email: " + e.message);
    throw new Error("Erro ao enviar email: " + e.message);
  }
}

function processarFormulario(formData) {
  try {
    Logger.log("=== INÍCIO DO PROCESSAMENTO DO FORMULÁRIO ===");
    Logger.log("Dados recebidos do formulário: " + JSON.stringify(formData));

    if (!formData.foto) {
      Logger.log("❌ ERRO: Nenhuma foto foi enviada.");
      return "Erro: Nenhuma foto anexada.";
    }
    
    if (formData.foto.length < 50) {
      Logger.log("❌ ERRO: A imagem enviada é inválida ou corrompida.");
      return "Erro: Imagem inválida ou muito pequena.";
    }

    Logger.log("✅ Foto recebida corretamente. Chamando `enviarSolicitacao()`...");

    enviarSolicitacao(formData.nome, formData.bloco, formData.apartamento, formData.email, formData.foto);
    
    Logger.log("✅ `enviarSolicitacao()` foi chamada com sucesso.");
    return "Cadastro enviado com sucesso!";
  } catch (e) {
    Logger.log("❌ ERRO ao processar formulário: " + e.message);
    return "Erro ao processar a solicitação: " + e.message;
  }
}

