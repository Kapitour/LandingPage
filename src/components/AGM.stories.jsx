// Agm.stories.js
import React from "react";
import Agm from "./AGM"; // Caminho para o seu componente Agm

export default {
  title: "Components/Agm",
  component: Agm,
};

const Template = (args) => <Agm {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Adicionalmente, você pode criar mais variações, se necessário:
// export const ExampleVariation = Template.bind({});
// ExampleVariation.args = { ...alguma configuração personalizada };