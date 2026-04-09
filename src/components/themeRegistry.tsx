'use client';
import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as CustomThemeProvider,useTheme } from '@/context/themeContext'; // adjust path

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,                    // keeps light or dark mode
      primary: {
        main: '#049d0b',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#9c27b0',
        contrastText: '#ffffff',
      },
      // Add more colors here (very useful)
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#000000' : '#ffffff',
        secondary: mode === 'light' ? '#555555' : '#aaaaaa',
      },
      error: { main: '#d32f2f' },
      warning: { main: '#ed6c02' },
      info: { main: '#0288d1' },
      success: { main: '#2e7d32' },
    },
  });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = React.useState(() =>
    createCache({ key: 'mui', prepend: true })
  );

  return (
    <CacheProvider value={cache}>
      <CustomThemeProvider>
        <ThemeModeWrapper cache={cache}>
          {children}
        </ThemeModeWrapper>
      </CustomThemeProvider>
    </CacheProvider>
  );
}

function ThemeModeWrapper({
  children,
  cache,
}: {
  children: React.ReactNode;
  cache: any;
}) {
  const { mode } = useTheme(); // from your new context

  const muiTheme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}