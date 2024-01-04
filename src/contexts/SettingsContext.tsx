"use client"
import { ReactNode, createContext } from 'react';
import { defaultSettings } from './config';
import { SettingsContextProps, SettingsValueProps, ThemeMode } from './type';
import useLocalStorage from '@/hooks/useLocalStorage';

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},

  // Reset
  onResetSetting: () => {},
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
  });

  // Mode
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: (event.target as HTMLInputElement).value as ThemeMode,
    });
  };

  // Reset
  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,

        // Mode
        onToggleMode,
        onChangeMode,

        // Reset
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
