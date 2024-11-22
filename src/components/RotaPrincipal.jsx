import { useState } from "react";
import Header from "./Header";
import RotasData from "./RotasData";
import RotaDetalhes from "./RotaDetalhes";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3e4444;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(201, 52, 52, 0.884);
  }
`;

const RoutesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const MainContent = styled.main`
  padding-top: 80px; /* Altura do Header */
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
color: #3e4444;
`

const RotaPrincipal = () => {
  const [filter, setFilter] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const filteredRoutes = filter
    ? RotasData.filter((rota) => rota.tipo === filter)
    : RotasData;

  return (
    <Container>
      <Header showPainel={false} />
      {!selectedRoute ? (
        <MainContent>
          <Title>Selecione o tipo de turismo</Title>
          <FilterButtons>
            {["Lazer", "Aventura", "Marítimo", "Corporativo", "Cultural", "Histórico", "Religioso", "Eventos"].map(
              (tipo) => (
                <Button key={tipo} onClick={() => setFilter(tipo)}>
                  {tipo}
                </Button>
              )
            )}
          </FilterButtons>
          <RoutesGrid>
            {filteredRoutes.map((rota) => (
              <Card key={rota.id} onClick={() => setSelectedRoute(rota)}>
                <h3>{rota.nome}</h3>
                <p>{rota.descricaoCurta}</p>
              </Card>
            ))}
          </RoutesGrid>
        </MainContent>
      ) : (
        <RotaDetalhes rota={selectedRoute} voltar={() => setSelectedRoute(null)} />
      )}
    </Container>
  );
};

export default RotaPrincipal;
