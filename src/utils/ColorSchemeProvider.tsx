import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

export enum ColorSchemeType {
  DARK = 'dark',
  LIGHT = 'light',
  ALL = 'all',
}

export interface IProviderType {
  children: ReactNode;
  initialColorScheme: ColorSchemeType;
}

export interface IContextColorScheme {
  setColorScheme: (colorScheme: ColorSchemeType) => void;
  colorScheme: ColorSchemeType;
}

const initialContextData = {
  setColorScheme: () => {},
  colorScheme: 'light' as ColorSchemeType,
};

export const ColorSchemeContext = createContext<IContextColorScheme>({
  ...initialContextData,
});

export function ColorSchemeProvider({
  children,
  initialColorScheme,
}: IProviderType): ReactElement {
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>(
    ColorSchemeType.LIGHT
  );

  useEffect(() => {
    // const scheme = StorageUtils.getString(
    //   AsyncKeys.ASYNC_KEY_THEME,
    //   ColorSchemeType.LIGHT_GETEX,
    // ) as ColorSchemeType;
    setColorScheme(initialColorScheme);
  }, [initialColorScheme]);

  const mProps = useMemo(
    () => ({
      colorScheme,
      setColorScheme,
    }),
    [colorScheme]
  );

  return (
    <ColorSchemeContext.Provider value={mProps}>
      {children}
    </ColorSchemeContext.Provider>
  );
}
