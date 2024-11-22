import styled from "styled-components";
import { useState } from "react";

// Estilo para o conteúdo principal
const MainContent = styled.main`
  padding-top: 80px; /* Altura do Header */
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

// Estilo para o container interno
const Container = styled.div`
  padding: 20px;
  background: #3e4444;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  color: white;
`;

// Estilo para o botão de voltar
const VoltarButton = styled.button`
  background: rgba(201, 52, 52, 0.884);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

// Estilo para o botão de GPS
const GpsButton = styled.a`
  display: inline-block;
  background: #4caf50;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background: #45a049;
  }
`;

// Estilo para cada ponto turístico
const PointContainer = styled.div`
  background: #2c2f30;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

// Estilo para o texto do ponto
const PointText = styled.span`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#ccc" : "white")};
`;

// Componente principal
const RotaDetalhes = ({ rota, voltar }) => {
  const [pontos, setPontos] = useState(rota.pontos);

  const handleCheckboxChange = (index) => {
    const updatedPoints = pontos.map((ponto, i) =>
      i === index ? { ...ponto, completed: !ponto.completed } : ponto
    );
    setPontos(updatedPoints);
  };

  return (
    <MainContent>
      {/* Botão de voltar fora do container */}
      <VoltarButton onClick={voltar}>Voltar</VoltarButton>
      <Container>
        <h2>{rota.nome}</h2>
        <p>{rota.detalhes}</p>

        {pontos.map((ponto, index) => (
          <PointContainer key={index}>
            <div>
              <input
                type="checkbox"
                checked={ponto.completed || false}
                onChange={() => handleCheckboxChange(index)}
              />
              <PointText completed={ponto.completed}>{ponto.nome}</PointText>
            </div>
            <p>{ponto.detalhes}</p>
            <GpsButton
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                ponto.endereco
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Rota
            </GpsButton>
          </PointContainer>
        ))}
      </Container>
    </MainContent>
  );
};

export default RotaDetalhes;
