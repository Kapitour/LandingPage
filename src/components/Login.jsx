import styled from "styled-components";

// Estilo para o contêiner principal
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #3e4444;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const LogoSection = styled.div`
  background-color: rgba(201, 52, 52, 0.733);
  background: linear-gradient(
    to right,
    rgba(201, 52, 52, 0.733) 0%,
    rgb(201, 52, 52, 0.733) 25%,
    rgb(201, 52, 52, 0.733) 85%,
    rgba(201, 52, 52, 0) 100%
  ); 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Logo = styled.div`
  background-image: url("./src/assets/login/LoginLogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 80%;
  height: 50%;
`;

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const FormBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 300px;
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

const Login = () => {
  return (
    <Container>
      <SubContainer>
        <LogoSection>
          <Logo />
        </LogoSection>
        <FormSection>
          <FormBox>
            <form>
              <Label>Email:</Label>
              <Input type="email" required />
              <Label>Senha:</Label>
              <Input type="password" required />
              <Button type="submit">Login</Button>
              <Link href="/cadastro">Cadastrar-se</Link>
            </form>
          </FormBox>
        </FormSection>
      </SubContainer>
    </Container>
  );
};

export default Login;
