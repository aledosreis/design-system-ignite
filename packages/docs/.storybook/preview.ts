import type { Preview } from "@storybook/react";

import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      themes: themes.dark
    },
    backgrounds: {
      default: 'dark'
    },
  },
  tags: ['autodocs'],
};

export default preview;
