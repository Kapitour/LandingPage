// Caroussel.stories.js
import React from "react";
import Caroussel from "./Caroussel"; // Caminho para o seu componente Caroussel

export default {
  title: "Components/Caroussel",
  component: Caroussel,
};

const Template = (args) => <Caroussel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/lagoa.jpg?raw=true",
    "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/praia.jpg?raw=true",
    "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/itaipuacu.jpg?raw=true",
    "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/2.jpg?raw=true",
    "https://github.com/Kapitour/Imgs-Padr-o/blob/main/carousel/1.png?raw=true",
    "https://github.com/Kapitour/Imgs-Padr-o/blob/main/Recanto.jpeg?raw=true",
  ],
};

// Adicionalmente, você pode criar mais variações, se necessário:
// export const ExampleVariation = Template.bind({});
// ExampleVariation.args = { items: [ ...outras imagens ] };
