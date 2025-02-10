# 📌 Cadastro de Moradores - Privilege Residencial

Este projeto permite que os moradores do condomínio **Privilege Residencial** enviem solicitações de cadastro facial via formulário online. O sistema recebe as informações do morador, incluindo uma foto 3x4, e envia os dados por e-mail para a administração, garantindo um fluxo simples e eficiente para a gestão do cadastro.

---

## 🚀 Funcionalidades

✅ Formulário online para cadastro de moradores.
✅ Upload de foto 3x4 com pré-visualização.
✅ Conversão da imagem para Base64 antes do envio.
✅ Envio automático de e-mails para a administração com a foto anexada.
✅ Confirmação automática do cadastro via e-mail para o morador.
✅ Logs detalhados para depuração no Google Apps Script.

---

## 🛠️ Tecnologias Utilizadas

- **Google Apps Script** (para manipulação de e-mails e processamento de formulários).
- **HTML, CSS e JavaScript** (para criação do formulário interativo).
- **Google Apps Script MailApp** (para envio de e-mails automáticos).

---

## 📂 Estrutura do Projeto

```
📦 CadastroMoradores
 ┣ 📜 Código.gs (Script principal no Google Apps Script)
 ┣ 📜 index.html (Formulário HTML para envio de dados)
 ┣ 📜 README.md (Documentação do projeto)
```

---

## 🔧 Configuração e Implantação

### **1️⃣ Criar um Projeto no Google Apps Script**
1. Acesse **https://script.google.com/** e crie um novo projeto.
2. Copie o conteúdo do arquivo **Código.gs** e cole no editor do Google Apps Script.
3. No menu, clique em **Publicar → Implantar como aplicativo da web**.
4. Defina **Quem tem acesso** como "Qualquer pessoa".
5. Copie a URL gerada para o formulário.

### **2️⃣ Criar o Formulário HTML**
1. No Google Apps Script, clique no botão **+** e adicione um novo arquivo chamado `index.html`.
2. Cole o conteúdo do arquivo `index.html` no editor.
3. Salve e execute a função `doGet()` para visualizar o formulário.

### **3️⃣ Testar o Envio**
1. Acesse a URL do formulário gerada na implantação.
2. Preencha os dados e anexe uma foto 3x4.
3. Envie o formulário e verifique os e-mails recebidos.
4. No Google Apps Script, abra **Executar → Exibir registros (logs)** para ver os detalhes da execução.

---

## 📩 Fluxo de E-mails

1. **E-mail para a Administração**
   - Contém os dados do morador.
   - A foto anexada como **.png**.
   - Assunto formatado como: `Solicitação de cadastro facial do apartamento XXX do bloco Y`.

2. **E-mail de Confirmação para o Morador**
   - Mensagem informando que a solicitação foi recebida com sucesso.

---

## 🔍 Logs para Depuração

Para verificar logs no Google Apps Script:
1. Acesse o **Google Apps Script**.
2. Clique em **Executar → Exibir registros (logs)**.
3. Verifique erros e depure conforme necessário.

---

## 📝 Licença

Este projeto é de uso interno do **Privilege Residencial** e pode ser adaptado para outros condomínios ou sistemas de controle de acesso.

---

💡 **Dúvidas ou sugestões?** Fale com a administração do Privilege Residencial! 🏢📩

