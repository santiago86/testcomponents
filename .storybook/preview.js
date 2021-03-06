import React from "react";

import { addParameters } from "@storybook/client-api";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import { makeDecorator } from "@storybook/addons";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

const withMuiTheme = (getStory, context) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {getStory(context)}
    </ThemeProvider>
  );
};

const muiThemed = makeDecorator({
  name: "mui-theme",
  wrapper: withMuiTheme,
  parameterName: "muiTheme",
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(muiThemed);
addDecorator(withInfo); 


addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "responsive",
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
},
);
