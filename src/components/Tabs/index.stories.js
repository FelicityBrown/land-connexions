import React from "react";
import { action } from "@storybook/addon-actions";

import { Tabs } from ".";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Default = (args) => {
  return (
    <div className="bg-blue-600">
      <Tabs {...args} />
    </div>
  );
};

Default.args = {
  tabs: [
    {
      label: "Tab 1",
      selected: true,
      url: "tab1",
    },
    {
      label: "Tab 2",
      url: "tab2",
    },
    {
      label: "Tab 3",
      url: "tab3",
    },
    {
      label: "Tab 4",
      url: "tab4",
    },
  ],
  onTab: action("onTab"),
};
