import React from "react";
import Footer from "./Footer";  // Certifique-se de que o caminho está correto

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Adicione props de teste se necessário
};
