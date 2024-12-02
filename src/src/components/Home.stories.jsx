
import React from 'react';
import Home from '../Home';  // Caminho do seu componente Home

export default {
  title: 'Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Se houver propriedades específicas para serem passadas, você pode definir aqui.
};

