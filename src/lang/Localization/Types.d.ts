import React, {ReactNode} from 'react';
import {LangTypes} from '../lang/Types/LangTypes';

export interface ChildrenType {
  children: React.FunctionComponent;
}
export interface ProviderType {
  children: ReactNode;
}
export interface ContextType {
  appLanguage: string;
  // eslint-disable-next-line no-unused-vars
  setAppLanguage: (lang: string) => void;
  translations: LangTypes;
}
