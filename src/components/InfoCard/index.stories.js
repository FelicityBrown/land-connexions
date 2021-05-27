import React from "react";

import { InfoCard } from ".";
import housesSunset from "../../assets/housessunset.jpg";

export default {
  title: "Components/InfoCard",
  component: InfoCard,
};

export const Default = (args) => {
  return <InfoCard {...args} />;
};

Default.args = {
  id: "1",
  heading: "Heading Here",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  photoPosition: "left",
  image: housesSunset,
  alt: "By Tom Thain on Unsplash",
};

export const PhotoRight = Default.bind({});
PhotoRight.args = {
  ...Default.args,
  photoPosition: "right",
};
