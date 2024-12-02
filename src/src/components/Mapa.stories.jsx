import React from "react";
import Mapa from "../components/Mapa"; // Ajuste o caminho conforme necessário

export default {
  title: "Componentes/Mapa", // Nome da categoria do Storybook
  component: Mapa, // Componente que você deseja exibir
};

const Template = (args) => <Mapa {...args} />;

export const MapaExemplo = Template.bind({});
MapaExemplo.args = {
  // Defina os args necessários, se houver
};
