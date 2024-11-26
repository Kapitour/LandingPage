import React from 'react';
import Login from './Login'; // Ajuste o caminho conforme necessário

export default {
  title: 'Components/Login',
  component: Login,
};

// História padrão
export const Default = () => <Login />;

// História com a propriedade 'showPainel' falsa
export const WithoutPainel = () => <Login showPainel={false} />;
