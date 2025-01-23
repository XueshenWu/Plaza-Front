import type { Preview } from "@storybook/react";
import "../app/globals.css"
import React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

initialize();

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',

  },

  // decorators: [
  //   (Story) => (
  //     React.createElement(ThemeProvider, {
  //       attribute: "class",
  //       defaultTheme: "light",


  //       disableTransitionOnChange: true,
  //       children: React.createElement(Story, {})
  //     })
  //   ),
  // ],

  decorators: [
    (Story) => (
      React.createElement(ThemeProvider, {
        attribute: "class",
        defaultTheme: "light",
        enableSystem: true,
        disableTransitionOnChange: true,
        children: React.createElement(Story, {})
      })
    ),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],

}

export default preview;
