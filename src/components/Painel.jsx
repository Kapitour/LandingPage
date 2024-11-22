import styled from "styled-components";

const ContainerPainel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-weight: bold;
`;

const Painel1 = styled.button`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Hist%C3%B3ria.png?raw=true");
  width: 30%;
  height: 90%;
  background-size: cover;
  background-color: transparent;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.9);
  border-top-right-radius: 120px;
  border-bottom-left-radius: 120px;
  text-shadow: 0px 1px 10px rgba(0, 0, 0, 1);
  font-size: 50px;
  font-weight: bold;
  & {
  transition: all 01s ease; 
}
  &:hover {
    background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Hist%C3%B3ria2.png?raw=true");
    width: 30%;
    height: 90%;
    background-size: cover;
    background-color: transparent;
    border-top-right-radius: 120px;
    border-bottom-left-radius: 120px;
    text-shadow: none;
    color: transparent;
  }
`;

const Painel2 = styled.button`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Desenvolvimento.png?raw=true");
  width: 30%;
  height: 90%;
  background-size: cover;
  background-color: transparent;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.9);
  border-top-right-radius: 120px;
  border-bottom-left-radius: 120px;
  text-shadow: 0px 1px 10px rgba(0, 0, 0, 1);
  font-size: 45px;
  font-weight: bold;
  & {
  transition: all 01s ease; 
}
  &:hover {
    background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Desenvolvimento2.png?raw=true");
    width: 30%;
    height: 90%;
    background-size: cover;
    background-color: transparent;
    border-top-right-radius: 120px;
    border-bottom-left-radius: 120px;
    text-shadow: none;
    color: transparent;
  }
`;

const Painel3 = styled.button`
  position: relative;
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Belezas.png?raw=true");
  width: 30%;
  height: 90%;
  background-size: cover;
  background-color: transparent;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.9);
  border-top-right-radius: 120px;
  border-bottom-left-radius: 120px;
  text-shadow: 0px 1px 10px rgba(0, 0, 0, 1);
  font-size: 50px;
  font-weight: bold;
  & {
  transition: all 01s ease; 
}
  &:hover {
    background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Belezas2.png?raw=true");
    width: 30%;
    height: 90%;
    background-size: cover;
    background-color: transparent;
    border-top-right-radius: 120px;
    border-bottom-left-radius: 120px;
    text-shadow: none;
    color: transparent;
  }
`;

const Painel = () => {
  return (
    <ContainerPainel>
      <Painel1>História</Painel1>
      <Painel2>Desenvolvimento</Painel2>
      <Painel3>Belezas</Painel3>
    </ContainerPainel>
  );
};

export default Painel;
