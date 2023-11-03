import React, {ReactNode} from 'react';
import {LangTypes} from '@/lang/English/en';

export interface ChildrenType {
  children: React.FunctionComponent;
}
export interface ProviderType {
  children: ReactNode;
}
export interface ContextType {
  appLanguage: string;
  setAppLanguage: (lang: string) => void;
  translations: LangTypes;
}
