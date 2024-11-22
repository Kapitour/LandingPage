import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Estilo para o contêiner principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #3e4444;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FormBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 300px;
  position: relative;
  overflow: visible; /* Permite que o conteúdo fora do box seja exibido */
`;


const Logo = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("./src/assets/login/LoginLogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 200px;
  z-index: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #000;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  background-color: #dfdfdf;
  color: #000;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: rgba(201, 52, 52, 0.884);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Link = styled.a`
  display: block;
  margin-top: 15px;
  color: rgba(201, 52, 52, 0.884);
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

// Estilo para o botão de voltar
const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: rgba(201, 52, 52, 0.9);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(201, 52, 52, 1);
  }
`;

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>
        &lt;
      </BackButton>
      <FormBox>
        <Logo />
        <form>
          <Label>Nome:</Label>
          <Input type="text" required />
          <Label>Email:</Label>
          <Input type="email" required />
          <Label>Senha:</Label>
          <Input type="password" required />
          <Label>Data de Nascimento:</Label>
          <Input type="date" required />
          <Button type="submit">Cadastrar</Button>
          <Link href="/login">Já possui uma conta? Faça login</Link>
        </form>
      </FormBox>
    </Container>
  );
};

export default Register;
