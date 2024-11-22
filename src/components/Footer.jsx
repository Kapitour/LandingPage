import styled from "styled-components";

// Estilo para o container principal do footer
const FooterContainer = styled.footer`
  padding: 20px;
  background-color: rgba(201, 52, 52, 0.884);
  text-align: center;
  margin-top: 20px;
`;

// Estilo para a seção interna dividida em duas colunas
const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  align-items: center;
  font-size: 20px;
`;

// Estilo para cada coluna do footer
const FooterColumn = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

// Estilo para o formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

// Estilo para os inputs e textarea
const Input = styled.input`
  color: #424242;
  width: 400px;
  height: 35px;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ebebeb;
`;

const Textarea = styled.textarea`
  width: 400px;
  color: #424242;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ebebeb;
`;

// Estilo para o botão de envio
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: rgba(201, 52, 52, 0.884);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

// Estilo para o texto do copyright
const Copyright = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Contato</h3>
          <p>Telefone: 21 98358-1550</p>
          <p>Email: plataformadigitalkapitour@gmail.com</p>
          <p>Instagram: @kapi.tour</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Envie sua mensagem</h3>
          <Form>
            <Input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Seu email"
              required
            />
            <Input
              type="tel"
              name="telefone"
              placeholder="Seu telefone"
              required
            />
            <Textarea
              name="mensagem"
              placeholder="Sua mensagem"
              rows="4"
              required
            ></Textarea>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </Form>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        <p>&copy; 2024 Kapitour. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
