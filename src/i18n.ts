// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      greeting: 'Hello',
      welcome: 'Welcome to the app',
      welcomeBack: 'Welcome back!',
      loginToYourAccount: 'Login to your account.',
      login: 'Login',
      inbox: 'Inbox',
      email: 'email',
      password: 'Password',
      allInboxes: 'All Inboxes',
      unreads: 'Unreads',
      forgetYourPassword: 'Forget your Password?',
      orContinueWith: 'Or continue with',
      dontHaveAnAccount: "Don't have an account?",
      signUp: 'Sign Up',
      byClickingLoginYouAgreeToOur: 'By clicking login you agree to our',
      termsOfService: 'Terms of Service',
      and: 'and',
      privacyPolicy: 'Privacy Policy',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
      theme: 'Theme',
      colorTheme: 'Color Theme',
      mode: 'Mode',
      amber: 'Amber',
      lime: 'Lime',
      teal: 'Teal',
      indigo: 'Indigo',
      fuchsia: 'Fuchsia',
      rose: 'Rose',
      slate: 'Slate',
    },
  },
  fr: {
    translation: {
      greeting: 'Bonjour',
      welcome: "Bienvenue dans l'application",
      welcomeBack: 'Bienvenue de retour !',
      loginToYourAccount: 'Connectez-vous à votre compte.',
      login: 'Se connecter',
      inbox: 'Boîte de réception',
      email: 'e-mail',
      password: 'Mot de passe',
      allInboxes: 'Toutes les boîtes de réception',
      unreads: 'Non lus',
      forgetYourPassword: 'Mot de passe oublié ?',
      orContinueWith: 'Ou continuez avec',
      dontHaveAnAccount: "Vous n'avez pas de compte ?",
      signUp: "S'inscrire",
      byClickingLoginYouAgreeToOur:
        'En cliquant sur Connexion, vous acceptez nos',
      termsOfService: "Conditions d'utilisation",
      and: 'et',
      privacyPolicy: 'Politique de confidentialité',
      light: 'Clair',
      dark: 'Sombre',
      system: 'Système',
      theme: 'Thème',
      colorTheme: 'Thème de couleur',
      mode: 'Mode',
      amber: 'Ambre',
      lime: 'Citron vert',
      teal: 'Sarcelle',
      indigo: 'Indigo',
      fuchsia: 'Fuchsia',
      rose: 'Rose',
      slate: 'Ardoise',
    },
  },
  ur: {
    translation: {
      greeting: 'سلام',
      welcome: 'ایپ میں خوش آمدید',
      welcomeBack: 'واپس خوش آمدید',
      loginToYourAccount: 'اپنے اکاؤنٹ میں لاگ ان کریں۔',
      login: 'لاگ ان کریں',
      inbox: 'ان باکس',
      email: 'ای میل',
      unreads: 'غیر پڑھے ہوئے',
      password: 'پاس ورڈ',
      allInboxes: 'تمام ان باکسز',
      forgetYourPassword: 'اپنا پاس ورڈ بھول گئے؟',
      orContinueWith: 'یا اس کے ساتھ جاری رکھیں',
      dontHaveAnAccount: 'کیا آپ کا اکاؤنٹ نہیں ہے؟',
      signUp: 'سائن اپ کریں',
      byClickingLoginYouAgreeToOur:
        'لاگ ان پر کلک کرکے آپ ہماری شرائط سے اتفاق کرتے ہیں',
      termsOfService: 'خدمت کی شرائط',
      and: 'اور',
      privacyPolicy: 'رازداری کی پالیسی',
      light: 'ہلکا',
      dark: 'تاریک',
      system: 'سسٹم',
      theme: 'تھیم',
      colorTheme: 'رنگ تھیم',
      mode: 'موڈ',
      amber: 'عنبر',
      lime: 'چونا',
      teal: 'نیلا سبز',
      indigo: 'نیلا',
      fuchsia: 'فوشیا',
      rose: 'گلاب',
      slate: 'پتھر',
    },
  },
};

i18n
  .use(LanguageDetector) // Automatically saves/loads from localStorage
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

// Update document direction on change
i18n.on('languageChanged', (lng) => {
  const dir = lng === 'ur' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
  // Apply Urdu font class globally if Urdu
  document.body.className = lng === 'ur' ? 'font-urdu' : '';
});

export default i18n;
