import React from "react";

import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
};

const row = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "20px",
  alignItems: "flex-start",
};
const mr = { marginRight: "10px" };

export const Default = (args) => {
  return <Button {...args} />;
};

Default.args = {
  label: "Label",
};

export const Disabled = Default.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Sizes = () => (
  <div style={row}>
    <Button label="Small" size="small" />
    <div style={mr} />
    <Button label="Medium" size="medium" />
    <div style={mr} />
    <Button label="Large" size="large" />
    <div style={mr} />
  </div>
);
