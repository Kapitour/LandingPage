import Header from "./Header";
import Painel from "./Painel";
import Mapa from "./Mapa";
import Parceiros from "./Parceiros";
import Rotas from "./Rotas";
import Caroussel from "./Caroussel";
import Footer from "./Footer";
import Backgroundeffect from "./Backgroundeffet";
import styled from "styled-components";

// Adicionando o efeito de transparência no topo dentro do Transition
const Transition = styled.div`
  width: 100%;
  height: 100%;
  transition: background 0.5s ease;
`;

function Home() {
  return (
    <>
      <Header />
      <Backgroundeffect />
      <Transition>
        <Painel />
      </Transition>
      <Mapa />
      <Parceiros />
      <Rotas />
      <Caroussel />
      <Footer />
    </>
  );
}

export default Home;