import "../src/index.css";

import { Router } from "react-router";
import { createBrowserHistory } from "history";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <Story />
      </Router>
    );
  },
];
