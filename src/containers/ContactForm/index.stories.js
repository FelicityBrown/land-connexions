import React from "react";

import { ContactForm } from ".";

export default {
  title: "Containers/ContactForm",
  component: ContactForm,
};

export const Default = (args) => {
  return <ContactForm {...args} />;
};

Default.args = {};
