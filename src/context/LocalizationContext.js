import React, { createContext, useState, useEffect } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import English from '../assets/translations/English';

export const LocalizationContext = createContext();

const LocalizationState = (props) => {

  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = { en: English, }
  // Set the locale once at the beginning of your app.
  i18n.locale = Localization.locale;
  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;

  const [locale, setLocale] = useState(null)

  useEffect(() => {
    async function f() {
      const { locale } = await Localization.getLocalizationAsync();
      setLocale(locale);
    }
    f()
  }, [])

  return (
    <LocalizationContext.Provider
      value={{
        i18n,
        locale,
        setLocale
      }}>
      {props.children}
    </LocalizationContext.Provider>
  )

}

export default LocalizationState;