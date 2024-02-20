'use client';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import React, { useMemo } from 'react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import palette from '@/theme/palette';
import useSettings from '@/hooks/useSettings';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const options = { key: 'mui' };

  const { themeMode } = useSettings();

  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette.light,
      shape: { borderRadius: 8 },
    }),
    [
      /* themeMode */
    ]
  );

  const theme = createTheme(themeOptions);

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
