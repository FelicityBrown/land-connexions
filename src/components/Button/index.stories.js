import React from "react";

import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
};

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
