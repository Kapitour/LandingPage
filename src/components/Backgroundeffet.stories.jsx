// Backgroundeffect.stories.js
import React from "react";
import Backgroundeffect from "./Backgroundeffect"; // Caminho para o seu componente Backgroundeffect

export default {
  title: "Components/Backgroundeffect",
  component: Backgroundeffect,
};

const Template = (args) => <Backgroundeffect {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Adicionalmente, você pode criar mais variações, se necessário:
// export const ExampleVariation = Template.bind({});
// ExampleVariation.args = { ...alguma configuração personalizada };