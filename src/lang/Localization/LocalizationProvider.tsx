import React, {
  createContext, useEffect, useMemo, useState,
} from "react";
import { ChildrenType, ContextType, ProviderType } from "./Types";
import english from "../English/en";
import tamil from "../Tamil/tn";

const TAG = "LocalizationProvider: ";

export const LANGUAGE_ENGLISH = "en";
export const LANGUAGE_TAMIL = "tn";
const DEFAULT_LANGUAGE = LANGUAGE_ENGLISH;

const initialContextData = {
  appLanguage: LANGUAGE_ENGLISH,
  setAppLanguage: () => {},
  translations: english,
};
export const LocalizationContext = createContext<ContextType>({ ...initialContextData });

export function LocalizationConsumer({ children }: ChildrenType): React.JSX.Element {
  return (
    <LocalizationContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error(
            "LocalizationConsumer must be used within a LocalizationProvider",
          );
        }
        return children(context);
      }}
    </LocalizationContext.Consumer>
  );
}

export function LocalizationProvider({ children }: ProviderType): React.JSX.Element {
  const [appLanguage, setAppLanguage] = useState<string>(DEFAULT_LANGUAGE); 
  const translations = appLanguage === LANGUAGE_ENGLISH ? english : tamil;
  useEffect(() => {
    console.log(TAG, `init language : ${appLanguage}`);
  }, [appLanguage]);

  const mProps = useMemo(() => ({
    appLanguage,
    setAppLanguage,
    translations,
  }), [appLanguage]);

  return (
    <LocalizationContext.Provider value={mProps}>
      {children}
    </LocalizationContext.Provider>
  );
}
