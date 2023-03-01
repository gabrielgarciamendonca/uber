import * as React from 'react';

import {StatusBar} from 'react-native';
import {theme} from '../../global/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes} from '../Routes';
import {ThemeProvider} from 'styled-components/native';

export function Container() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated
        backgroundColor={theme.dark.colors.primary}
        translucent
      />
      <ThemeProvider theme={theme.dark}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
