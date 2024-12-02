// Header.stories.jsx
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  showPainel: true,
};

export const WithoutPainel = Template.bind({});
WithoutPainel.args = {
  showPainel: false,
};
