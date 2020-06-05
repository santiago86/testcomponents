import { addons } from "@storybook/addons";
import { themes, create } from "@storybook/theming";

const theme = create({
  base: "light",
  colorPrimary: "#ccc",
  colorSecondary: "#333",
  brandTitle: "Copa-Components",
  brandUrl: "https://www.copaair.com/",
});

addons.setConfig({
  theme: theme,
});
