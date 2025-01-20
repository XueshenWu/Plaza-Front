import type { Preview } from "@storybook/react";
import "../app/globals.css"
import React from "react";
import { ThemeProvider } from "../components/theme-provider";
import {initialize, mswLoader} from 'msw-storybook-addon';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    

  },

  decorators: [
    (Story) => (
      React.createElement(ThemeProvider, {
        attribute: "class",
        defaultTheme: "light",


        disableTransitionOnChange: true,
        children: React.createElement(Story, {})
      })
    ),

  ],

  tags: ["autodocs"],
  loaders: [mswLoader],
};

export default preview;
