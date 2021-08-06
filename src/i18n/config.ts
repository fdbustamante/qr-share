import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: {
      'title': 'QR Code Generator',
      'insert_text': 'Insert text',
      'select_color': 'Select Color',
      'generate_qr': 'Generate QR',
      'select_lang': 'Select language'
    },
  },
  es: {
    translation: {
      'title': 'QR Code Generator',
      'insert_text': 'Ingresar texto',
      'select_color': 'Seleccione color',
      'generate_qr': 'Generar QR',
      'select_lang': 'Seleccionar idioma'
    },
  }
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});