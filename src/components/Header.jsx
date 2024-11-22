import styled from "styled-components";
import { Link } from "react-router-dom"; // Importando Link para navegação

// Estilo do Header
const HeaderMenu = styled.header`
  background-color: rgba(201, 52, 52, 0.733);
  color: white;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  display: flex;
  letter-spacing: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 1em 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;

const Logo = styled(Link)`
  background-image: url("./src/assets/home/KapitourHeader.png");
  background-size: cover;
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 50px;
  font-weight: bold;
`;

const HeaderBtn = styled(Link)`
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  align-items: center;
  vertical-align: center;
  border-radius: 5px;
  margin: 0 10px;
  font-weight: bold;

  &:hover {
    letter-spacing: 3px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

const LoginBtn = styled(Link)`
  background-color: rgba(201, 52, 52, 0.884);
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  text-transform: uppercase;
  border-radius: 10px;
  margin: 0 10px;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, letter-spacing 0.3s ease,
    text-shadow 0.3s ease;

  &:hover {
    letter-spacing: 3px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
`;

const PainelImg = styled.div`
  position: relative;
  width: 100%;
  height: 60em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PainelImg1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./src/assets/home/BackgroundHeader.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  z-index: 1;
  opacity: 0.9;
`;

const PainelImg2 = styled.div`
  position: relative;
  background-image: url("./src/assets/home/KapitourMarica.png");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  width: 50%;
  height: 70%;
`;

const Header = ({ showPainel = true }) => {
  return (
    <>
      <HeaderMenu>
        <Logo to="/" />
        <HeaderBtn to="/rotas">Rotas</HeaderBtn>
        <HeaderBtn to="/contato">Contato</HeaderBtn>
        <HeaderBtn to="/loja">Loja</HeaderBtn>
        <LoginBtn to="/login">Login</LoginBtn>
      </HeaderMenu>
      {showPainel && (
        <PainelImg>
          <PainelImg1 />
          <PainelImg2 />
        </PainelImg>
      )}
    </>
  );
};

export default Header;
