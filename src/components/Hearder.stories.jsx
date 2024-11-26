// src/stories/Header.stories.js
import React from 'react';
import Header from '../components/Header';  // Ajuste o caminho conforme sua estrutura de pastas

// Defina o título e o componente
export default {
  title: 'Components/Header', // Nome para o painel no Storybook
  component: Header,         // Componente que será mostrado
};

const Template = (args) => <Header {...args} />;

// Aqui criamos diferentes variações do seu componente Header
export const Default = Template.bind({});
Default.args = {
  showPainel: true,
};

export const WithoutPainel = Template.bind({});
WithoutPainel.args = {
  showPainel: false,
};
