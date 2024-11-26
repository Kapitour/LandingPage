import React from "react";
import Guia from "./Guia";
import { BrowserRouter as Router } from "react-router-dom"; // Caso você use 'react-router'

export default {
  title: "Componentes/Guia", // Título no painel do Storybook
  component: Guia, // Componente que será exibido
};

const Template = (args) => (
  <Router>
    <Guia {...args} />
  </Router>
);

// Exemplo de história para o componente Guia
export const Default = Template.bind({});
Default.args = {
  // Pode passar argumentos aqui se houver props dinâmicas para o componente
};
