import type {Preview} from '@storybook/react';
import '../src/styles/scss/index.css';
import {Chip, Grid} from '@mui/material';
import React from 'react';
import {ColorSchemeProvider, ColorSchemeType} from '../src/utils/ColorSchemeProvider';
import {LocalizationProvider} from '../src/lang/Localization/LocalizationProvider';
import english from '../src/lang/English/en';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: ColorSchemeType.LIGHT,
    toolbar: {
      icon: 'circlehollow',
      items: [
        {value: ColorSchemeType.LIGHT, right: '🔆', title: 'Light'},
        {value: ColorSchemeType.DARK, right: '🌑', title: 'Dark'},
        {value: ColorSchemeType.ALL, right: '🌈', title: 'All'},
      ],
      dynamicTitle: true,
    },
  },
  locale: {
    name: 'Locale',
    description: 'Global locale for components',
    defaultValue: english,
    toolbar: {
      icon: 'globe',
      items: [{value: english, right: '🇺🇸', title: 'English'}],
      dynamicTitle: true,
    },
  },
};

const withThemeProvider = (Story: any, context: any) => {
  const theme: ColorSchemeType = context.globals.theme;

  const MStory = ({myTheme}: {myTheme: ColorSchemeType}) => {
    return (
      <LocalizationProvider>
        <ColorSchemeProvider initialColorScheme={myTheme}>
      <Chip label={myTheme} size="small" color={'primary'} />
    <Grid marginTop={1} marginBottom={2}>
      <Story />
      </Grid>
      </ColorSchemeProvider>
      </LocalizationProvider>
  );
  };

  if (theme === ColorSchemeType.ALL) {
    return (
      <div>
        <MStory myTheme={ColorSchemeType.LIGHT} />
    <MStory myTheme={ColorSchemeType.DARK} />
    </div>
  );
  }

  return (
    <LocalizationProvider>
      <ColorSchemeProvider initialColorScheme={theme}>
      <Story />
      </ColorSchemeProvider>
      </LocalizationProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withThemeProvider],
  globalTypes,
};

export default preview;
